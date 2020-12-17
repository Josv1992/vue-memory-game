<template>
  <div class="card" @click="clickCard">
    <slot></slot>
    <span>{{ cardId }}</span>
    <span v-if="cardVisible || cardIsGuessed">Visible</span>
    <span v-else>Hidden</span>
    <img v-if="cardVisible || cardIsGuessed" :src="getImgUrl()" />
    <img v-else src="https://i.imgur.com/tVFRJYE.png" />
  </div>
</template>

<script>
export default {
  props: ["cardId", "name", "url", "visible", "uniqueId"],
  data() {
    return {
      cardVisible: false,
      cardIsGuessed: false,
    };
  },
  emits: ["flipCard"],
  methods: {
    clickCard() {
      if (!this.cardIsGuessed && !this.cardVisible) {
        this.cardVisible = !this.cardVisible;
        // this.$store.dispatch("memory/flipCard", {
        //   id: this.key,
        //   cardId: this.cardId,
        //   visible: this.visible,
        // });
        // const test = this.$store.getters["memory/hideOrShow"];
        // this.cardVisible = test;
        this.$parent.clickCard({
          id: this.uniqueId,
          cardId: this.cardId,
          visible: this.cardVisible,
        });
      }
    },
    getImgUrl() {
      return this.url;
    },
  },
  created() {},
  updated() {
    // this.cardVisible = this.$store.getters["memory/shouldShowCard"];
  },
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  min-height: 10rem;
  max-height: 40rem;
  min-width: 10rem;
  max-width: 40rem;
  display: grid;
}
</style>
