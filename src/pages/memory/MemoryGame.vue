<template>
  <!-- <div class="row" v-for="gridRow in defaultGridSize" :key="gridRow">
    <base-memory-card v-for="rowItem in defaultGridSize" :key="rowItem" :id="rowItem">
      {{  }}
    </base-memory-card>
  </div> -->
  <div class="card-container">
    <base-memory-card
      v-for="card in allCards"
      ref="cards"
      :key="card.uniqueId"
      :uniqueId="card.uniqueId"
      :cardId="card.cardId"
      :url="card.url"
      :visible="card.visible"
    >
      {{ card.name }}
    </base-memory-card>
  </div>
</template>

<script>
import BaseMemoryCard from "@/components/ui/BaseMemoryCard.vue";
export default {
  components: { BaseMemoryCard },
  data() {
    return {
      defaultGridSize: 3,
      turns: 0,
      currentGuess: 0,
    };
  },
  computed: {
    gridSize() {
      return this.defaultGridSize;
    },
    allCards() {
      let numberOfCards = 0;
      const cards = this.$store.getters["memory/allCards"];
      const duplicatedCards = [];
      for (const card of cards) {
        duplicatedCards.push({ ...card, uniqueId: numberOfCards });
        numberOfCards++;
        duplicatedCards.push({ ...card, uniqueId: numberOfCards });
        numberOfCards++;
      }
      const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
      console.log(shuffledCards);
      return shuffledCards;
    },
  },
  methods: {
    clickCard(cardDetails) {
      this.$store.dispatch("memory/flipCard", cardDetails);
      const cardsToHide = this.$store.getters["memory/hideTheseCards"];
      console.log("cards to hide: ", cardsToHide);
      if (cardsToHide) {
        console.log("hide");
      }
    },
  },
  created() {},
  updated() {},
};
</script>

<style scoped>
.card-container {
  background-color: #eeeeee;
  margin: 0;
  display: flex;
}
</style>
