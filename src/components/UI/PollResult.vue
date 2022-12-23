<template>
  <h5 class="card-title">{{ getQuestion }}</h5>
  <section class="poll-result cb-height">
    <BarChart :optionsList="getOptions" :pollResult="getSubmittedVotesList" />
  </section>
  <section class="total-votes">
    <h6
      class="alert alert-info m-0 p-2"
      v-bind:innerHTML="getTotalVotesMessage"
    ></h6>
  </section>
</template>

<script>
import BarChart from "../charts/BarChart.vue";
import { mapGetters } from "vuex";
export default {
  components: { BarChart },
  methods: {
    submittedVotes(votes) {
      this.$store.dispatch({ type: "totalVotesSubmitted", total: votes.total });
    },
  },
  computed: {
    ...mapGetters([
      "getQuestion",
      "getOptions",
      "getTotalVotesMessage",
      "getSubmittedVotesList",
    ]),
  },
};
</script>
