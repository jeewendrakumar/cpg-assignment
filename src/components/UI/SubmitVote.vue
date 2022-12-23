<template>
  <form class="poll-form" @submit.prevent="addVote(selectedOption)">
    <h5 class="card-title">{{ getQuestion }}</h5>
    <section class="cb-height poll-section">
      <transition-group name="list">
        <div
          class="form-check list-item"
          v-for="option in getOptions"
          :key="option.value"
        >
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              :value="option.value"
              v-model="selectedOption"
            />
            {{ option.value }}
          </label>
        </div>
      </transition-group>
    </section>
    <section
      :class="{
        'vote-btn': true,
        'vote-btn-right': true,
      }"
    >
      <label></label>
      <button
        type="submit"
        :class="{
          btn: true,
          'btn-primary':
            getOptionsLength || getOptionsLength > 2 || selectedOption,
          'btn-secondary':
            !getOptionsLength || getOptionsLength < 2 || !selectedOption,
        }"
        :disabled="!getOptionsLength || getOptionsLength < 2 || !selectedOption"
      >
        Vote
      </button>
    </section>
  </form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    ...mapActions(["addVote"]),
  },
  computed: {
    ...mapGetters(["getQuestion", "getOptions", "getOptionsLength"]),
  },
};
</script>
<style scoped>
.list-item {
  font-size: larger;
  margin-top: 22px;
}
.vote-btn {
  display: flex;
}
.vote-btn-right {
  justify-content: right;
}
.vote-btn-justify {
  justify-content: space-between;
  align-items: baseline;
}
</style>
