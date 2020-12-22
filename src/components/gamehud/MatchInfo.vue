<template>
  <div class="score">
    <span class="infokey">Matches left:</span>
    <h2>{{ leftToMatch }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["leftToMatch"]),
  },
};
</script>

<style scoped></style>
