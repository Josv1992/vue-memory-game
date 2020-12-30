<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in" @before-enter="beforeEnter" @enter="enter">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/ui/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  watch: {
    $route(to, _from) {
      document.title = to.meta.title || "Memory Game";
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(function () {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
