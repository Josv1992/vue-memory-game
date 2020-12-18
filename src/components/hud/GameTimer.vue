<template>
  <div class="score">
    <span class="infokey">Time:</span>
    <h2>{{ timePassed }} s</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../vuex/store/statusEnum";

export default {
  data() {
    return STATUS;
  },

  computed: {
    ...mapGetters(["status", "timePassed"]),
  },

  methods: {
    ...mapActions(["reset"]),
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
</style>
