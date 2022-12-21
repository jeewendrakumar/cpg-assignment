<template>
  <h5 class="card-title">{{ pollData.question }}</h5>
  <section class="poll-result cb-height">
    <BarChart :pollData="pollData" :voteData="voteData" />
  </section>
  <section class="total-votes">
    <label v-bind:innerHTML="getTotalVotes"></label>
  </section>
</template>

<script>
import BarChart from "../Charts/BarChart.vue";
export default {
  components: { BarChart },
  props: ["voteData", "pollData"],
  computed: {
    getTotalVotes() {
      return `Total Votes: ${this.voteData.length}`;
    },
  },
};
</script>

<style scoped></style>
