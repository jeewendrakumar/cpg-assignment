<template>
  <h5 class="card-title">{{ getQuestion }}</h5>
  <section class="poll-result cb-height">
    <BarChart
      :pollData="$store.state.poll"
      :voteData="$store.state.totalVotes"
    />
  </section>
  <section class="total-votes">
    <label v-bind:innerHTML="getTotalVotes"></label>
  </section>
</template>

<script>
import BarChart from "../charts/BarChart.vue";
export default {
  components: { BarChart },
  computed: {
    getTotalVotes() {
      return this.$store.getters.getTotalVotes;
    },
    getQuestion() {
      return this.$store.getters.getQuestion;
    },
  },
};
</script>
