<template>
  <div class="game-panel">
    <heads-up-display></heads-up-display>
    <game-board></game-board>
    <game-status></game-status>
  </div>
</template>

<script>
import HeadsUpDisplay from "./hud/HeadsUpDisplay";
import GameBoard from "./card/GameBoard";
import GameStatus from "./footer/GameStatus";

import { mapActions } from "vuex";
import { STATUS } from "../vuex/store/statusEnum";

export default {
  components: { HeadsUpDisplay, GameBoard, GameStatus },
  created() {
    this.updateStatus(STATUS.READY);
    this.reset();
  },

  methods: {
    ...mapActions(["updateStatus", "reset"]),
  },
};
</script>

<style scoped>
.game-panel {
  width: 1000px;
  height: 800px;
  border: 4px solid #bdbdbd;
  border-radius: 15px;
  background-color: #faf8ef;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 450px) {
  .game-panel {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
}
</style>
