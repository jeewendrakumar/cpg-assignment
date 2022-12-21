<template>
  <TheHeader></TheHeader>
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
        <div v-if="poll.question" class="col-sm-6 col-md-4">
          <div class="card mb-4">
            <div class="card-body cb-height">
              <SubmitVote
                :poll-question="poll.question"
                :poll-options="poll.options"
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
import TheHeader from "./components/UI/layout/TheHeader.vue";
import CreatePoll from "./components/UI/CreatePoll.vue";
import PollResult from "./components/UI/PollResult.vue";
import SubmitVote from "./components/UI/SubmitVote.vue";

export default {
  name: "App",
  components: { CreatePoll, PollResult, SubmitVote, TheHeader },
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
.card-body {
  border-bottom: 4px solid rgb(23, 171, 218);
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

/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
