<template>
  <form class="poll-form" @submit.prevent="vote">
    <h5 class="card-title">{{ getQuestion }}</h5>
    <section class="cb-height poll-section">
      <transition-group name="list" tag="p">
        <div
          class="form-check list-item"
          v-for="option in $store.state.poll.options"
          :key="option.value"
        >
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              :value="option.value"
              v-model="selectedOption"
            />
            {{ option.value }}
          </label>
        </div>
      </transition-group>
    </section>
    <section class="vote-btn clearfix">
      <button
        type="submit"
        :class="{
          btn: true,
          'btn-primary':
            $store.state.poll.options.length ||
            $store.state.poll.options.length > 2 ||
            selectedOption,
          'btn-secondary':
            !$store.state.poll.options.length ||
            $store.state.poll.options.length < 2 ||
            !selectedOption,
        }"
        :disabled="
          !$store.state.poll.options.length ||
          $store.state.poll.options.length < 2 ||
          !selectedOption
        "
      >
        Vote
      </button>
    </section>
  </form>
</template>
<script>
export default {
  data() {
    return {
      selectedOption: null,
      // totalVotes: [],
    };
  },
  methods: {
    vote() {
      this.$store.commit({
        type: "addVote",
        value: this.selectedOption,
      });
    },
  },
  computed: {
    getQuestion() {
      return this.$store.getters.getQuestion;
    },
  },
};
</script>
<style scoped>
.vote-btn {
  display: flex;
  justify-content: right;
}
</style>
