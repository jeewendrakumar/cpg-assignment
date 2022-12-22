export default {
    getOptionLimitMessage(state) {
        return `${state.poll.options.length}/${state.allowedOptionLimit} possible answers`;
    },
    getTotalVotes(state) {
        return state.totalVotes;
    },
    getTotalVotesMessage(state) {
        return `Total Votes: ${state.totalVotes}`;
    },
    getQuestion(state) {
        return state.poll.question;
    },
    getOptions(state) {
        return state.poll.options;
    },
    getOptionsLength(state) {
        return state.poll.options.length;
    },
    getQuestionInput(state) {
        return state.pollQuestionInput;
    },
    getOptionInput(state) {
        return state.pollOptionInput;
    },
    getAllowedOptionLimit(state) {
        return state.allowedOptionLimit;
    },
    getCharacterLength(state) {
        return state.maxLength;
    },
    getSubmittedVotesList(state) {
        return state.submittedVotes;
    },
    getSuccessMsg(state) {
        return state.successMsg;
    },
    showMessage(state) {
        return state.showMessage;
    }
}