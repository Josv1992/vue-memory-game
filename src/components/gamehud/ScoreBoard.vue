<template>
  <div class="score">
    <span v-if="highestSpeed < 9999">
      <span class="infokey">Your record:</span>
      <h2>{{ highestSpeed }} seconds</h2>
    </span>
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
