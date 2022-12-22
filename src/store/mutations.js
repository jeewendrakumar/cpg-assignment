export default {
    createPoll(state) {
        try {
            const existingValue = state.poll.options.find(
                (item) => item.value === state.pollOptionInput
            );

            if (existingValue) {
                alert("No Duplicates Allowed!");
                state.pollOptionInput = "";
                return;
            }
            state.poll.options.push({ value: state.pollOptionInput });
            state.pollOptionInput = "";
            state.showMessage = true;
            setTimeout(() => {
                state.showMessage = false;
            }, 1000);
        } catch (error) {
            console.log('Create Poll Error : ', error);
        }
    },
    removePollOption(state, payload) {
        try {
            state.poll.options.splice(payload, 1);
        } catch (error) {
            console.log('Remove Option Error : ', error);
        }
    },
    resetPoll(state) {
        state.poll = {
            question: "",
            options: [],
        };
        state.pollQuestionInput = null;
        state.pollOptionInput = null;
        state.selectedOption = null;
        state.submittedVotes = [],
            state.totalVotes = 0;
    },
    addVote(state, payload) {
        try {
            state.submittedVotes.push(payload);
            state.showMessage = true;
            setTimeout(() => {
                state.showMessage = false;
            }, 1000);
        } catch (error) {
            console.log('Remove Option Error : ', error);
        }

    },
    totalVotesSubmitted(state, payload) {
        state.totalVotes = payload.total;
    }
}