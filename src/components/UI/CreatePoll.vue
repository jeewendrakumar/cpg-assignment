<template>
  <section class="poll-question form-group">
    <h5 class="card-title">Create a Poll</h5>
    <input
      type="text"
      class="form-control"
      :maxlength="maxLength"
      v-model.trim="poll.question"
      placeholder="Type a question?"
    />
  </section>
  <section class="form-group cb-height">
    <transition-group name="list" tag="p">
      <div
        class="poll-options__remove list-item"
        v-for="(option, index) in poll.options"
        :key="index"
      >
        <input
          type="text"
          class="form-control"
          name="options"
          v-model="option.value"
        />
        <button
          type="submit"
          class="btn btn-danger close"
          aria-label="Close"
          @click="removePollOption(index)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </transition-group>
    <div class="poll-options__add form-group">
      <input
        type="text"
        class="form-control"
        name="options"
        placeholder="Type an answer"
        v-model.trim="pollOption"
        @keyup.enter="addPollOption"
        :maxlength="maxLength"
        :disabled="poll.options.length == limitPollOption || !poll.question"
      />
      <button
        type="submit"
        :class="{
          btn: true,
          add: true,
          'btn-success': poll.question && pollOption,
          'btn-secondary': !poll.question || !pollOption,
        }"
        aria-label="Add"
        @click="addPoll"
        :disabled="!poll.question || !pollOption"
      >
        Add
      </button>
    </div>
  </section>
  <section class="poll-create__btn">
    <label v-html="getOptionLimit"></label>
    <button @click="resetPoll" class="btn btn-primary reset" aria-label="Reset">
      Reset
    </button>
  </section>
</template>

<script>
export default {
  emits: ["poll-data"],
  data() {
    return {
      maxLength: 80,
      poll: {
        question: "",
        options: [],
      },
      pollOption: "",
      limitPollOption: 10,
    };
  },
  methods: {
    addPoll() {
      //check for duplicate poll option
      const existingValue = this.poll.options.find(
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

      this.poll.options.push(options);
      this.$emit("poll-data", this.poll);
      this.pollOption = "";
    },
    removePollOption(index) {
      this.poll.options.splice(index, 1);
    },
    resetPoll() {
      this.poll = {
        question: "",
        options: [],
      };
      this.$emit("poll-data", this.poll);
    },
  },
  computed: {
    getOptionLimit() {
      return `${this.poll.options.length}/${this.limitPollOption} possible answers`;
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
  margin-bottom: 10px;
}
.poll-options__add input[type="text"],
.poll-options__remove input[type="text"] {
  margin-right: 8px;
}
.close {
  width: 64px;
}
.poll-create__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
