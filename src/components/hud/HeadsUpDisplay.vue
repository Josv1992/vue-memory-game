<template>
  <div class="status-bar">
    <match-info></match-info>
    <game-timer></game-timer>
    <game-status></game-status>
    <score-board></score-board>
  </div>
</template>

<script>
import GameStatus from "./GameStatus.vue";
import GameTimer from "./GameTimer.vue";
import MatchInfo from "./MatchInfo";
import ScoreBoard from "./ScoreBoard";

export default {
  components: { MatchInfo, ScoreBoard, GameTimer, GameStatus },
};
</script>

<style>
.status-bar {
  background-color: #3987b4;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 15px 15px 0px 0px;
}
.score {
  width: 220px;
  height: 100px;
  padding-top: 10px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.infokey {
  font-size: 19px;
  font-weight: bold;
  display: block;
  text-align: center;
}
h2 {
  text-align: center;
}

@media screen and (max-width: 450px) {
  .board {
    width: 105px;
  }
  span {
    font-size: 17px;
  }
}

@media screen and (max-width: 380px) {
  .board {
    width: 95px;
  }
}

@media screen and (max-width: 360px) {
  .board {
    width: 90px;
  }
  span {
    font-size: 15px;
  }
}
</style>
