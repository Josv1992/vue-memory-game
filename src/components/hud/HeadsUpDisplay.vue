<template>
  <div class="status-bar">
    <match-info></match-info>
    <game-timer></game-timer>
    <score-board></score-board>
  </div>
</template>

<script>
import GameTimer from "./GameTimer.vue";
import MatchInfo from "./MatchInfo";
import ScoreBoard from "./ScoreBoard";

export default {
  components: { MatchInfo, ScoreBoard, GameTimer },
};
</script>

<style>
.status-bar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.infokey {
  font-size: 19px;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
}
h2 {
  color: #fff;
  text-align: center;
}
</style>
