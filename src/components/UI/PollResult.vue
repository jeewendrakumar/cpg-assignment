<template>
  <BarChart :pollData="pollData" :voteData="voteData" />
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
      console.log(this.voteData);
      return `Total Votes: ${this.voteData.length}`;
    },
  },
};
</script>

<style scoped>
.total-votes {
  display: flex;
}
</style>
