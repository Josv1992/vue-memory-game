<template>
  <teleport to="body">
    <base-dialog title="Game Completed!" :show="status === PASS" @close="reset">
      <p>Congratulations, you completed the game!</p>
      <p v-if="timePassed === 1">You completed the game in {{ timePassed }} second.</p>
      <p v-else>You completed the game in {{ timePassed }} seconds.</p>
      <highscore-form @save-data="saveData"></highscore-form>
    </base-dialog>
  </teleport>
  <div class="score">
    <span class="status-text" v-if="status === READY">Ready</span>
    <span class="status-text" v-if="status === PLAYING">Playing</span>
    <span class="status-text">
      <base-button
        class="reset-button"
        v-if="status === PASS"
        @click.prevent.stop="reset"
      >
        Reset
      </base-button>
    </span>
  </div>
</template>

<script>
// TODO: Calculate score instead of showing seconds
import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../store/statusEnum";
import HighscoreForm from "./HighscoreForm.vue";

export default {
  components: { HighscoreForm },
  data() {
    return STATUS;
  },

  computed: {
    ...mapGetters(["status", "timePassed"]),
  },

  methods: {
    ...mapActions(["reset", "submitHighscore"]),
    saveData(data) {
      this.submitHighscore(data);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.status-text {
  font-size: 19px;
  font-weight: bold;
  display: block;
  text-align: center;
  align-content: center;
}
.reset-button {
  align-content: center;
  font-size: 19px;
  font-weight: bold;
}
</style>
