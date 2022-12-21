import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
            totalVotes: [],
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
            state.poll.options.splice(payload.value, 1);
        },
        resetPoll(state) {
            state.poll = {
                question: "",
                options: [],
            };
            state.pollQuestionInput = null;
            state.pollOptionInput = null;
            state.selectedOption = null;
            state.totalVotes = []
        },
        addVote(state, payload) {
            state.totalVotes.push(payload.value);
        }
    },
    getters: {
        getOptionLimit(state) {
            return `${state.poll.options.length}/${state.limitPollOption} possible answers`;
        },
        getTotalVotes(state) {
            return `Total Votes: ${state.totalVotes.length}`;
        },
        getQuestion(state) {
            return state.poll.question;
        }
    }

});

const app = createApp(App)
app.use(store);
app.mount('#app')
