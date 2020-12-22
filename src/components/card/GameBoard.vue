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
import { STATUS } from "../../store/statusEnum";

export default {
  components: { MemoryCard },
  data() {
    return {
      firstCard: null,
    };
  },

  computed: {
    ...mapGetters(["leftMatched", "cards", "status", "chunkSize", "flippedCardList"]),
    chunkedCards() {
      return chunk(this.cards, this.chunkSize);
    },
  },

  methods: {
    ...mapActions([
      "updateStatus",
      "match",
      "flipCards",
      "reset",
      "mistake",
      "addToFlipped",
    ]),
    onFlipped(e) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAYING);
      }
      if (!this.firstCard) {
        return (this.firstCard = e);
      }
      this.addToFlipped(e.cardName);
      if (
        this.cardNameFlippedBefore(this.firstCard) &&
        !this.cardNameFlippedBefore(e) &&
        this.firstCard !== e &&
        this.firstCard.cardName !== e.cardName
      ) {
        this.mistake([this.firstCard.cardName]);
      } else if (
        this.firstCard.flippedMultipleTimes &&
        !e.flippedMultipleTimes &&
        this.firstCard !== e &&
        this.firstCard.cardName !== e.cardName
      ) {
        this.mistake([this.firstCard.cardName]);
      } else if (
        (this.firstCard.flippedMultipleTimes || e.flippedMultipleTimes) &&
        this.firstCard !== e &&
        this.firstCard.cardName !== e.cardName
      ) {
        this.mistake([this.firstCard.cardName, e.cardName]);
      }
      if (this.firstCard !== e && this.firstCard.cardName === e.cardName) {
        this.firstCard = null;
        this.match();
        return this.leftMatched || this.updateStatus(STATUS.FINISHED);
      }
      const firstCard = this.firstCard;
      this.firstCard = null;
      setTimeout(() => {
        this.flipCards([firstCard, e]);
      }, 500);
    },
    cardNameFlippedBefore(e) {
      if (this.flippedCardList.includes(e.cardName)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.gameboard {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;

  background: #f1eede;
  background: -webkit-linear-gradient(45deg, #f1eede, #e6e2ce);
  background: -o-linear-gradient(45deg, #f1eede, #e6e2ce);
  background: -moz-linear-gradient(45deg, #f1eede, #e6e2ce);
  background: linear-gradient(45deg, #f1eede, #e6e2ce);
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
