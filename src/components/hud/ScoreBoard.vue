<template>
  <div class="score">
    <span class="infokey">Highest Speed:</span>
    <h2>{{ highestSpeed }} seconds</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["highestSpeed"]),
  },
};
</script>

<style scoped>
.score {
  width: 220px;
  height: 100px;
  padding: 10px;
  background-color: #bbada0;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  color: #eae0d1;
}

span {
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
