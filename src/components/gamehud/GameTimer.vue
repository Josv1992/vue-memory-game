<template>
  <div class="score">
    <span class="infokey">Time:</span>
    <h2>{{ timePassed }} s</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../store/statusEnum";

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
