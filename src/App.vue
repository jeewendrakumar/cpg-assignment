<template>
  <HeaderComponent></HeaderComponent>
  <div class="container-fluid">
    <div class="row">
      <Transition name="fade" mode="out-in">
        <div class="col-sm-6 col-md-4">
          <div class="card mb-4">
            <div class="card-body cb-height">
              <CreatePoll @poll-data="getPollData"></CreatePoll>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-if="poll.QUESTION" class="col-sm-6 col-md-4">
          <div class="card mb-4">
            <div class="card-body cb-height">
              <SubmitVote
                :poll-question="poll.QUESTION"
                :poll-options="poll.OPTIONS"
                @poll-result="getPollResults"
              ></SubmitVote>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-if="selectedOption" class="col-sm-12 col-md-4">
          <div class="card mb-4">
            <div class="card-body cb-height">
              <PollResult
                :vote-data="selectedOption"
                :poll-data="poll"
              ></PollResult>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/UI/layout/HeaderComponent.vue";
import CreatePoll from "./components/UI/CreatePoll.vue";
import PollResult from "./components/UI/PollResult.vue";
import SubmitVote from "./components/UI/SubmitVote.vue";
export default {
  name: "App",
  components: { CreatePoll, PollResult, SubmitVote, HeaderComponent },
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
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(204 204 204 / 30%);
  margin: 0;
  padding: 0;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cb-height {
  min-height: 275px;
}
</style>
