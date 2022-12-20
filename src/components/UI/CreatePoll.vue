<template>
  <div>
    <!-- <h2>Create a Poll</h2> -->
    <section class="poll-question form-group">
      <h5 class="card-title">Poll Question</h5>
      <input
        type="text"
        class="form-control"
        :maxlength="maxLength"
        v-model.trim="poll.question"
        placeholder="Type a question?"
      />
    </section>
    <section class="form-group cb-height">
      <div
        class="poll-options__remove"
        v-for="(option, index) in poll.optionsList"
        :key="index"
      >
        <input
          type="text"
          class="form-control"
          name="options"
          v-model="option.value"
          v-bind:disabled="true"
        />
        <button
          type="submit"
          class="btn btn-danger close"
          @click="removePollOption(index)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="poll-options__add form-group">
        <input
          type="text"
          class="form-control"
          name="options"
          placeholder="Type an answer"
          v-model.trim="pollOption"
          @keyup.enter="addPollOption"
          :maxlength="maxLength"
          :disabled="
            poll.optionsList.length == limitPollOption || !poll.question
          "
        />
        <button
          type="submit"
          class="btn btn-success"
          @click="addPoll"
          :disabled="!poll.question || !pollOption"
        >
          Add
        </button>
      </div>
    </section>
    <section class="poll-create__btn">
      <label v-html="getOptionLimit"></label>
      <button
        @click="resetPoll"
        class="btn btn-primary"
        :disabled="!poll.optionsList.length"
      >
        Reset
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxLength: 80,
      poll: {
        question: "",
        optionsList: [],
      },
      pollOption: "",
      limitPollOption: 10,
    };
  },
  methods: {
    addPoll() {
      //check for duplicate poll option
      const existingValue = this.poll.optionsList.find(
        (item) => item.value === this.pollOption
      );
      if (existingValue) {
        alert("No Duplicates Allowed!");
        this.pollOption = "";
        return;
      }

      const options = {
        value: this.pollOption,
      };

      this.poll.optionsList.push(options);
      this.$emit("poll-data", {
        QUESTION: this.poll.question,
        OPTIONS: this.poll.optionsList,
      });
      this.pollOption = "";
    },
    removePollOption(index) {
      this.poll.optionsList.splice(index, 1);
    },
    resetPoll() {
      this.poll = {
        question: "",
        optionsList: [],
      };
      this.$emit("poll-data", {
        QUESTION: this.poll.question,
        OPTIONS: this.poll.optionsList,
      });
    },
  },
  computed: {
    getOptionLimit() {
      return `${this.poll.optionsList.length}/${this.limitPollOption} possible answers`;
    },
  },
};
</script>

<style scoped>
.poll-question {
  margin-bottom: 10px;
}
.poll-question input[type="text"] {
  width: 100%;
}
.poll-options__add,
.poll-options__remove {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.poll-options__add input[type="text"],
.poll-options__remove input[type="text"] {
  flex: 1;
  margin-right: 8px;
}
.poll-create__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
