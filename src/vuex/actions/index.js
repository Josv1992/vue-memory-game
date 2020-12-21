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

  shuffleCards: ({commit}) => {
    commit('shuffleCards', {
      cards: shuffle(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardName: name }))
    })
  },

  updateStatus: (context, status) => {
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
  async submitHighscore(context, data) {
    const playerData = {
      name: data.name,
      score: data.score
    };

    const response = await fetch(
      `https://vue-memory-4e32d-default-rtdb.europe-west1.firebasedatabase.app/highScores.json`,
      {
        method: 'POST',
        body: JSON.stringify(playerData)
      }
    );

    if (response.ok) {
      console.log('OK');
    }

    if (!response.ok) {
      // error ...
      console.log('Error');
    }

    context.commit('setHighscores', playerData);
  },

  compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    console.log(comparison);
    return comparison;
  },

  async fetchHighscores(context) {
    const response = await fetch(`https://vue-memory-4e32d-default-rtdb.europe-west1.firebasedatabase.app/highScores.json`);
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
    requests.sort(this.compare);

    context.commit('setHighscores', requests);
  }  
}
