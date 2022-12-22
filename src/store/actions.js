export default {
    addPoll(context) {
        context.commit("createPoll");
    },
    removePollOption(context, payload) {
        context.commit('removePollOption', payload);
    },
    addVote(context, payload) {
        context.commit("addVote", payload);
    },
    resetPoll(context) {
        context.commit("resetPoll");
    },
    totalVotesSubmitted(context, payload) {
        context.commit("totalVotesSubmitted", payload)
    },
    showMessage(context) {
        console.log(context);
        context.commit('showMessage');
    }
}