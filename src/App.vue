<template>
  <div class="container">
    <section class="section">
      <CreatePoll @poll-data="getPollData"></CreatePoll>
    </section>
    <section class="section">
      <SubmitVote
        v-if="poll.QUESTION"
        :poll-question="poll.QUESTION"
        :poll-options="poll.OPTIONS"
        @poll-result="getPollResults"
      ></SubmitVote>
    </section>
    <section class="section">
      <PollResult
        v-if="selectedOption"
        :vote-data="selectedOption"
        :poll-data="poll"
      ></PollResult>
    </section>
  </div>
</template>

<script>
import CreatePoll from "./components/UI/CreatePoll.vue";
import PollResult from "./components/UI/PollResult.vue";
import SubmitVote from "./components/UI/SubmitVote.vue";
export default {
  name: "App",
  components: { CreatePoll, PollResult, SubmitVote },
  data() {
    return {
      poll: {},
      selectedOption: null,
    };
  },
  methods: {
    getPollData(pollData) {
      console.log(pollData);
      this.poll = pollData;
    },
    getPollResults(poll) {
      console.log(poll);
      this.selectedOption = poll.result;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  flex-wrap: wrap;
}

.section {
  flex: 1;
  border: 1px solid black;
  text-align: center;
  padding: 20px;
  min-width: 320px;
}
</style>
