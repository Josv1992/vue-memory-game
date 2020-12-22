import { createStore } from 'vuex';

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
  state() {
    return {
      leftToMatch: 0,
      highestSpeed: 0,
      status: '',
      cards: [],
      timePassed: 0,
      chunkSize: 1,
      highScores: [],
      maxTimeBonus: 180,
      totalMistakes: 0,
      mistakesPerCard: [],
      flippedCardList: []
    }
  },
  actions,
  mutations,
  getters
})

export default store;
