<template>
  <div class="chessboard">
    <memory-card
      v-for="(card, index) of cards"
      :key="index"
      :option="card"
      @flipped="onFlipped"
    ></memory-card>
  </div>
</template>

<script>
import MemoryCard from "./Card";

import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../vuex/store/statusEnum";

export default {
  components: { MemoryCard },
  data() {
    return {
      lastCard: null,
    };
  },

  computed: {
    ...mapGetters(["leftMatched", "cards", "status"]),
  },

  methods: {
    ...mapActions(["updateStatus", "match", "flipCards"]),
    onFlipped(e) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAYING);
      }
      if (!this.lastCard) {
        return (this.lastCard = e);
      }
      if (this.lastCard !== e && this.lastCard.cardName === e.cardName) {
        this.lastCard = null;
        this.match();
        return this.leftMatched || this.updateStatus(STATUS.PASS);
      }
      const lastCard = this.lastCard;
      this.lastCard = null;
      setTimeout(() => {
        this.flipCards([lastCard, e]);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.chessboard {
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  height: 630px;
  border-radius: 4px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}

.container:nth-child(4n) {
  margin-right: 0px;
}

@media screen and (max-width: 450px) {
  .chessboard {
    height: 480px;
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .chessboard {
    height: 450px;
  }
}
</style>
