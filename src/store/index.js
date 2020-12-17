import { createStore } from 'vuex';

import memoryModule from './modules/memory/index.js';

const store = createStore({
  modules: {
    memory: memoryModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;