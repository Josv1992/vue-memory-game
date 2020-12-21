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
