import { shuffle } from '../../lib/shuffle'
import { STATUS } from '../statusEnum.js'

const cardNames = ['chansey', 'charizard', 'gyarados', 'machamp', 'nidoking', 'poliwrath', 'raichu', 'zapdos']

let timerId

const statusHandler = {
  PLAYING: ({ commit }) => {
    timerId = setInterval(function () {
      commit('counting')
    }, 1000)
  },

  FINISHED: ({ commit }) => {
    clearInterval(timerId)
    commit('updateHighestSpeed')
  }
}

export default {
  reset: ({ commit }) => {
    commit('reset', {
      leftToMatch: 8,
      highestSpeed: localStorage.getItem('highestSpeed') || 9999,
      status: STATUS.READY,
      cards: shuffle(cardNames.concat(cardNames)).map(name => ({
        flipped: false, cardName: name, wasFlippedAtLeastOnce: false,
        flippedMultipleTimes: false,
      })),
      timePassed: 0,
      totalMistakes: 0,
      mistakesPerCard: [],
      flippedCardList: []
    })
  },

  shuffleCards: ({ commit }) => {
    commit('shuffleCards', {
      cards: shuffle(cardNames.concat(cardNames)).map(name => ({
        flipped: false, cardName: name, wasFlippedAtLeastOnce: false,
        flippedMultipleTimes: false,
      }))
    })
  },

  updateStatus: function (context, status) {
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
  },

  mistake: ({ commit }, cards) => {
    commit('addMistake', cards)
  },

  addToFlipped: ({ commit}, card) => {
    commit('addToFlipped', card)
  },

  async submitHighscore(context, data) {
    const playerData = {
      name: data.name,
      score: data.score
    };

    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_URL}`,
      {
        method: 'POST',
        body: JSON.stringify(playerData)
      }
    );

    if (!response.ok) {
      // TODO: error message
      // console.log('Error submitting score');
    }

    context.commit('setHighscores', playerData);
  },

  async fetchHighscores(context) {
    const response = await fetch(`${process.env.VUE_APP_FIREBASE_URL}`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        name: responseData[key].name,
        score: responseData[key].score
      };
      requests.push(request);
    }
    requests.sort((b, a) => a.score.toString().localeCompare(b.score.toString(), undefined, { 'numeric': true }));
    context.commit('setHighscores', requests);
  }
}
