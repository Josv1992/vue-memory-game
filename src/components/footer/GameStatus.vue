<template>
  <div class="status-footer">
    <span v-if="status === READY">Ready</span>
    <span v-if="status === PLAYING">Playing</span>
    <a v-if="status === PASS" href @click.prevent.stop="reset">Play again</a>
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
    ...mapGetters(["status"]),
  },

  methods: {
    ...mapActions(["reset"]),
  },
};
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
a {
  text-decoration: none;
}
</style>
