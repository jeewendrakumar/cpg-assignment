<template>
  <form class="poll-form" @submit.prevent="vote">
    <h2>{{ pollQuestion }}</h2>
    <label
      class="poll-form__input"
      v-for="option in pollOptions"
      :key="option.value"
    >
      <input type="radio" :value="option.value" v-model="selectedOption" />
      {{ option.value }}
    </label>
    <section class="vote__btn">
      <button type="submit">Vote</button>
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
      console.log(this.selectedOption);
      this.totalVotes.push(this.selectedOption);
      this.$emit("poll-result", { result: this.totalVotes });
    },
  },
};
</script>
<style scoped>
.poll-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.poll-form__input {
  display: flex;
}
.vote__btn {
  align-items: flex-end;
}
</style>
