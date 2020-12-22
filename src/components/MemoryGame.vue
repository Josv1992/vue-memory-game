<template>
  <div tabindex="-1" @keyup.c="doSomething">
    <div class="game-panel">
      <base-button v-if="cheatEnabled" @click="completeGame">Complete Game</base-button>
      <heads-up-display></heads-up-display>
      <game-board></game-board>
    </div>
  </div>
</template>

<script>
import HeadsUpDisplay from "./gamehud/HeadsUpDisplay";
import GameBoard from "./card/GameBoard";

import { mapActions } from "vuex";
import { STATUS } from "../store/statusEnum";

export default {
  components: { HeadsUpDisplay, GameBoard },
  data() {
    return {
      cheatEnabled: false,
    };
  },
  created() {
    this.updateStatus(STATUS.READY);
    this.reset();
  },

  methods: {
    ...mapActions(["updateStatus", "reset"]),
    completeGame() {
      this.updateStatus(STATUS.FINISHED);
    },
    doSomething() {
      this.cheatEnabled = !this.cheatEnabled;
    },
  },
};
</script>

<style scoped>
.game-panel {
  width: 1000px;
  border-radius: 15px;
  background-color: #faf8ef;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
*:focus {
  outline: 0;
}
@media screen and (max-width: 1000px) {
  .game-panel {
    width: 100%;
  }
}
@media screen and (max-width: 700px) {
  .game-panel {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
}

@media screen and (max-width: 450px) {
  .game-panel {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
}
</style>
