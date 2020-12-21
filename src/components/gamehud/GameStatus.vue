<template>
  <teleport to="body">
    <base-dialog title="Game Completed!" :show="status === PASS" @close="reset">
      <p>Congratulations, you completed the game!</p>
      <p>Time taken: {{ timePassed }} seconds</p>
      <p>Mistakes made: {{ totalMistakes }}</p>
      <p>Mistake penalty: {{ calculateMistakePenalty() }}</p>
      <p>Number of cards in game: {{ cards.length }}</p>
      <p>You scored {{ calculateScore() }} points!</p>
      <highscore-form @save-data="saveData"></highscore-form>
    </base-dialog>
  </teleport>
  <!-- <div class="score">
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
  </div> -->
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
    ...mapGetters([
      "status",
      "timePassed",
      "maxTimeBonus",
      "cards",
      "totalMistakes",
      "mistakesPerCard",
    ]),
  },

  methods: {
    ...mapActions(["reset", "submitHighscore"]),
    saveData(data) {
      data.score = this.calculateScore();
      this.submitHighscore(data);
    },
    calculateScore() {
      let score = 0;
      score += this.calculateTimeBonus();
      score += this.cards.length * 2;
      score -= this.calculateMistakePenalty();
      if (score < 0) {
        score = 0;
      }
      return score;
    },
    calculateMistakePenalty() {
      let mistakePenalty = 0;
      for (const mistake of this.mistakesPerCard) {
        mistakePenalty += 1 * (mistake.number * 2.5);
      }
      return mistakePenalty.toFixed();
    },
    calculateTimeBonus() {
      let timeBonus = this.maxTimeBonus - this.timePassed;
      if (timeBonus > 0) {
        timeBonus = timeBonus * 3;
      } else {
        timeBonus = 0;
      }
      return timeBonus;
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
