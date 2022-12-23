<template>
  <the-loader :active="loaderActive" message="Please wait 2 seconds" />
  <section class="poll-question form-group">
    <h5 class="card-title">Create a Poll</h5>
    <input
      type="text"
      class="form-control"
      :maxlength="getCharacterLength"
      v-model.trim="$store.state.poll.question"
      placeholder="Type a question?"
    />
  </section>
  <section class="form-group cb-height">
    <transition-group name="list">
      <div
        class="poll-options__remove list-item"
        v-for="(option, index) in getOptions"
        :key="index"
      >
        <input
          type="text"
          class="form-control"
          name="options"
          v-model="option.value"
          :maxlength="getCharacterLength"
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
        v-model.trim="$store.state.pollOptionInput"
        @keyup.enter="addPoll"
        :maxlength="getCharacterLength"
        :disabled="getOptionsLength == getAllowedOptionLimit || !getQuestion"
      />
      <button
        type="submit"
        :class="{
          btn: true,
          add: true,
          'btn-success': getQuestion && getOptionInput,
          'btn-secondary': !getQuestion || !getOptionInput,
        }"
        aria-label="Add"
        @click="addPoll"
        :disabled="!getQuestion || !getOptionInput"
      >
        Add
      </button>
    </div>
    <div v-if="getOptionsLength > 0 && getOptionsLength < 2" class="mx-auto">
      <label class="alert alert-danger p-1" role="alert">
        Add atleast 2 option to Vote
      </label>
    </div>
  </section>
  <section class="poll-create__btn">
    <h6 class="alert alert-info m-0 p-2" v-html="getOptionLimitMessage"></h6>
    <button @click="resetPoll" class="btn btn-primary reset" aria-label="Reset">
      Reset
    </button>
  </section>
</template>

<script>
import TheLoader from "./loader/TheLoader.vue";
import loaderMixin from "../../mixins/loader";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { TheLoader },
  mixins: [loaderMixin],
  methods: {
    loadSpinner() {
      this.showLoader();
      setTimeout(() => {
        this.hideLoader();
      }, 2000);
    },
    ...mapActions(["addPoll", "removePollOption", "resetPoll"]),
  },
  computed: {
    ...mapGetters([
      "getOptionLimitMessage",
      "getQuestion",
      "getOptions",
      "getOptionsLength",
      "getAllowedOptionLimit",
      "getCharacterLength",
      "getOptionInput",
      "getQuestionInput",
    ]),
  },
  mounted() {
    this.loadSpinner();
  },
};
</script>

<style scoped>
.poll-question {
  margin-bottom: 10px;
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
