<template>
  <TheHeader></TheHeader>
  <TheAlert v-if="showMessage" :message="getSuccessMsg"></TheAlert>
  <div class="container-fluid">
    <div class="row">
      <Transition name="fade" mode="out-in">
        <div class="col-sm-6 col-md-4">
          <div class="card mb-4">
            <div class="card-body cb-height">
              <CreatePoll></CreatePoll>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div v-if="getQuestion && getOptionsLength" class="col-sm-6 col-md-4">
          <div class="card mb-4">
            <div class="card-body cb-height">
              <SubmitVote></SubmitVote>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="fade" mode="out-in">
        <div
          v-if="getTotalVotes != 0 || getOptionsLength > 0"
          class="col-sm-12 col-md-4"
        >
          <div class="card mb-4">
            <div class="card-body cb-height">
              <PollResult></PollResult>
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
import TheAlert from "./components/UI/alerts/TheAlert.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { CreatePoll, PollResult, SubmitVote, TheHeader, TheAlert },
  computed: {
    ...mapGetters([
      "getQuestion",
      "getOptions",
      "getTotalVotes",
      "getOptionsLength",
      "getSuccessMsg",
      "showMessage",
    ]),
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
  background: #fff;
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

.card-body {
  border-bottom: 4px solid rgb(23, 171, 218);
}
.card-title {
  border-bottom: 4px solid #28a745;
  padding: 10px 0;
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
