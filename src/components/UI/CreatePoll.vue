<template>
  <div>
    <!-- <h2>Create a Poll</h2> -->
    <section class="poll-question">
      <label>Poll Question</label>
      <input
        type="text"
        v-model.trim="poll.question"
        placeholder="Type a question?"
      />
    </section>
    <section class="poll-options">
      <label>Add Poll Options</label>
      <div
        class="poll-options__remove"
        v-for="(option, index) in poll.optionsList"
        :key="index"
      >
        <input
          type="text"
          name="options"
          v-model="option.value"
          v-bind:disabled="true"
        />
        <button type="submit" @click="removePollOption(index)">Remove</button>
      </div>
      <div class="poll-options__add">
        <input
          type="text"
          name="options"
          placeholder="Type an answer"
          v-model.trim="pollOption"
          @keyup.enter="addPollOption"
          :disabled="
            poll.optionsList.length == limitPollOption || !poll.question
          "
        />
        <button
          type="submit"
          @click="addPollOption"
          :disabled="!poll.question || !pollOption"
        >
          Add
        </button>
      </div>
    </section>
    <section class="poll-create__btn">
      <label v-html="getOptionLimit"></label>
      <button
        @click="createPoll"
        v-html="btnName"
        class="btn btn-primary"
        :disabled="!poll.optionsList.length"
      ></button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poll: {
        question: "",
        optionsList: [],
      },
      pollOption: "",
      limitPollOption: 10,
      btnName: "Add Poll",
    };
  },
  methods: {
    addPollOption() {
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
      this.pollOption = "";
    },
    removePollOption(index) {
      this.poll.optionsList.splice(index, 1);
    },
    createPoll() {
      if (this.btnName === "Reset") {
        this.poll = {
          question: "",
          optionsList: [],
        };
      }
      if (!this.poll.optionsList.length) {
        console.log("executed");
        this.btnName = "Reset";
      }
      this.btnName = this.btnName === "Add Poll" ? "Reset" : "Add Poll";
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
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 10px;
}
.poll-question input[type="text"] {
  width: 100%;
}
.poll-options {
  padding: 10px;
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
  padding: 10px;
}
</style>
