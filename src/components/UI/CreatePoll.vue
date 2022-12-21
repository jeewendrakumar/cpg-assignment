<template>
  <section class="poll-question form-group">
    <h5 class="card-title">Create a Poll</h5>
    <input
      type="text"
      class="form-control"
      :maxlength="$store.state.maxLength"
      v-model.trim="$store.state.poll.question"
      placeholder="Type a question?"
    />
  </section>
  <section class="form-group cb-height">
    <transition-group name="list" tag="p">
      <div
        class="poll-options__remove list-item"
        v-for="(option, index) in $store.state.poll.options"
        :key="index"
      >
        <input
          type="text"
          class="form-control"
          name="options"
          v-model="option.value"
          :maxlength="$store.state.maxLength"
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
        :maxlength="$store.state.maxLength"
        :disabled="
          $store.state.poll.options.length == $store.state.limitPollOption ||
          !$store.state.poll.question
        "
      />
      <button
        type="submit"
        :class="{
          btn: true,
          add: true,
          'btn-success':
            $store.state.poll.question && $store.state.pollOptionInput,
          'btn-secondary':
            !$store.state.poll.question || !$store.state.pollOptionInput,
        }"
        aria-label="Add"
        @click="addPoll"
        :disabled="!$store.state.poll.question || !$store.state.pollOptionInput"
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
  methods: {
    addPoll() {
      this.$store.commit("createPoll");
    },
    removePollOption(index) {
      this.$store.commit({
        type: "removePollOption",
        value: index,
      });
    },
    resetPoll() {
      this.$store.commit("resetPoll");
    },
  },
  computed: {
    getOptionLimit() {
      return this.$store.getters.getOptionLimit;
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
