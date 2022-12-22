<template>
  <h5 class="card-title">{{ getQuestion }}</h5>
  <section class="poll-result cb-height">
    <BarChart
      :optionsList="$store.state.poll.options"
      :pollResult="$store.state.submittedVotes"
      @total-votes="submittedVotes"
    />
  </section>
  <section class="total-votes">
    <label v-bind:innerHTML="getTotalVotes"></label>
  </section>
</template>

<script>
import BarChart from "../charts/BarChart.vue";
import { mapGetters } from "vuex";
export default {
  components: { BarChart },
  methods: {
    submittedVotes(val) {
      this.$store.state.totalVotes = val.total;
    },
  },
  computed: {
    ...mapGetters(["getTotalVotes", "getQuestion"]),
  },
};
</script>
