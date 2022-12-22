import { createStore } from 'vuex'

//implementing state management
const store = createStore({
    state() {
        return {
            maxLength: 80,
            poll: {
                question: "",
                options: [],
            },
            pollQuestionInput: null,
            pollOptionInput: null,
            limitPollOption: 10,
            selectedOption: null,
            submittedVotes: [],
            totalVotes: 0
        }
    },
    mutations: {
        createPoll(state) {

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
        },
        removePollOption(state, payload) {
            state.poll.options.splice(payload, 1);

            // let recalculateTotalVotes = [];
            // state.poll.options.forEach((opt) => {
            //     recalculateTotalVotes.push(...state.submittedVotes.filter(vote => vote == opt.value));
            // });
            // state.submittedVotes = recalculateTotalVotes;
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
            state.submittedVotes.push(payload);
        }
    },
    actions: {
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
        }
    },
    getters: {
        getOptionLimit(state) {
            return `${state.poll.options.length}/${state.limitPollOption} possible answers`;
        },
        getTotalVotes(state) {
            return `Total Votes: ${state.totalVotes}`;
        },
        getQuestion(state) {
            return state.poll.question;
        }
    }

});

export default store;