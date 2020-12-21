<template>
  <div class="container" @click="flip">
    <div class="card" :class="{ flipped: option.flipped }">
      <img :src="require(`../../../img/${option.cardName}.png`)" class="front" />
      <img class="back" src="../../../img/backside.png" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {},
  props: {
    option: {
      type: Object,
      default() {
        return {
          flipped: false,
          cardName: "",
          wasFlippedAtLeastOnce: false,
          flippedMultipleTimes: false,
        };
      },
    },
  },

  methods: {
    ...mapActions(["flipCard"]),
    flip() {
      if (this.option.flipped) {
        return;
      }
      this.flipCard(this.option);
      this.$emit("flipped", this.option);
    },
  },
};
</script>

<style scoped>
.container {
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
  margin-bottom: 2px;
}

.card {
  width: 100px;
  height: 140px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 5px;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
