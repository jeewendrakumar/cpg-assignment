<template>
  <form class="poll-form" @submit.prevent="vote">
    <h5 class="card-title">{{ pollQuestion }}</h5>
    <section class="cb-height poll-section">
      <div class="form-check" v-for="option in pollOptions" :key="option.value">
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
    </section>
    <section class="vote-btn clearfix">
      <button type="submit" class="btn btn-primary" :disabled="!selectedOption">
        Vote
      </button>
    </section>
  </form>
</template>
<script>
export default {
  emits: ["poll-result"],
  props: ["pollQuestion", "pollOptions"],
  data() {
    return {
      selectedOption: null,
      totalVotes: [],
    };
  },
  methods: {
    vote() {
      this.totalVotes.push(this.selectedOption);
      this.$emit("poll-result", { result: this.totalVotes });
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
