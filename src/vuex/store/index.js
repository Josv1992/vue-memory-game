import { createStore } from 'vuex';

import getters from '../getters'
import actions from '../actions'
import mutations from '../mutations'

const store = createStore({
  state() {
    return {
      leftMatched: 0,
      highestSpeed: 0,
      status: '',
      cards: [],
      timePassed: 0,
      chunkSize: 1,
      highScores: []
    }
  },
  actions,
  mutations,
  getters
})

export default store;
