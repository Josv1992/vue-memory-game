<template>
  <div class="score">
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

<style scoped></style>
