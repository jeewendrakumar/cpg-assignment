import { createStore } from 'vuex'
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const store = createStore({
    namespaced: true,
    state() {
        return {
            maxLength: 80,
            poll: {
                question: "",
                options: [],
            },
            pollQuestionInput: null,
            pollOptionInput: null,
            allowedOptionLimit: 10,
            selectedOption: null,
            submittedVotes: [],
            totalVotes: 0,
            successMsg: 'Success',
            showMessage: false
        };
    },
    mutations,
    actions,
    getters
});

export default store;