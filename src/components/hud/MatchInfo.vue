<template>
  <div class="scoreboard">
    <span class="infokey">Matches left:</span>
    <h2>{{ leftMatched }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["leftMatched"]),
  },
};
</script>

<style scoped>
.scoreboard {
  width: 200px;
  height: 100px;
  padding: 10px;
  background-color: #bbada0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #eae0d1;
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
