<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  background-color: #0f529e;
  border: 1px solid #2a68af;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #0f529e;
  border-color: #2a68af;
}

.flat {
  background-color: transparent;
  color: #0f529e;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #2a68af;
  color: #2a68af;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #85c4f7;
}
</style>
