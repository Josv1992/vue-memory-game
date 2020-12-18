import { shuffle } from '../../lib/shuffle'
import { STATUS } from '../store/statusEnum'

const cardNames = ['chansey', 'charizard', 'gyarados', 'machamp', 'nidoking', 'poliwrath', 'raichu', 'zapdos']

let timerId

const statusHandler = {
  PLAYING: ({ commit }) => {
    timerId = setInterval(function() {
      commit('counting')
    }, 1000)
  },

  PASS: ({ commit }) => {
    clearInterval(timerId)
    commit('updateHighestSpeed')
  }
}

export default {
  reset: ({ commit }) => {
    commit('reset', {
      leftMatched: 8,
      highestSpeed: localStorage.getItem('highestSpeed') || 9999,
      status: STATUS.READY,
      cards: shuffle(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardName: name })),
      timePassed: 0
    })
  },

  updateStatus: function(context, status) {
    context.commit('updateStatus', status)
    statusHandler[status] && statusHandler[status](context)
  },

  flipCard: ({ commit }, card) => {
    commit('flip', card)
  },

  flipCards: ({ commit }, cards) => {
    commit('flips', cards)
  },

  match: ({ commit }) => {
    commit('decreaseMatch')
  }
}
