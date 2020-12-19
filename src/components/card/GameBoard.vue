<template>
  <div class="gameboard">
    <ul v-for="(chunk, CIndex) of chunkedCards" :key="chunk">
      <memory-card
        v-for="(card, index) of chunkedCards[CIndex]"
        :key="index"
        :option="card"
        @flipped="onFlipped"
      ></memory-card>
    </ul>
  </div>
</template>

<script>
import MemoryCard from "./MemoryCard";
import { mapActions, mapGetters } from "vuex";
import chunk from "chunk";
import { STATUS } from "../../vuex/store/statusEnum";

export default {
  components: { MemoryCard },
  data() {
    return {
      lastCard: null,
    };
  },

  computed: {
    ...mapGetters(["leftMatched", "cards", "status", "chunkSize"]),
    chunkedCards() {
      return chunk(this.cards, this.chunkSize);
    },
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
      }, 500);
    },
  },
};
</script>

<style scoped>
.gameboard {
  width: 100%;
  height: 630px;
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
  .gameboard {
    height: 480px;
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .gameboard {
    height: 450px;
  }
}
</style>
