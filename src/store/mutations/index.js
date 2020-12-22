export default {
  reset(state, newState) {
    state.leftToMatch = newState.leftToMatch;
    state.highestSpeed = newState.highestSpeed;
    state.status = newState.status;
    state.cards = newState.cards;
    state.timePassed = newState.timePassed;
    state.totalMistakes = newState.totalMistakes;
    state.mistakesPerCard = newState.mistakesPerCard;
    state.flippedCardList = newState.flippedCardList;
  },

  updateStatus(state, newStatus) {
    state.status = newStatus;
  },

  decreaseMatch(state) {
    state.leftToMatch--;
  },

  flip(state, card) {
    let c = state.cards.find(cc => cc === card);
    c.flipped = !c.flipped;
    if (c.wasFlippedAtLeastOnce) {
      c.flippedMultipleTimes = true;
    }
    c.wasFlippedAtLeastOnce = true;
  },

  flips(state, cards) {
    state.cards
      .filter(cc => cards.indexOf(cc) >= 0)
      .forEach(cc => {
        cc.flipped = !cc.flipped;
      })
  },

  counting(state) {
    state.timePassed++;
  },

  addMistake(state, payload) {
    state.totalMistakes++;
    payload.forEach(key => {
      if (state.mistakesPerCard.find(({ name }) => name === key)) {
        for (const card of state.mistakesPerCard) {
          if (card.name === key) {
            card.number++;
          }
        }
      } else {
        state.mistakesPerCard.push({
          name: key,
          number: 1
        });
      }
    });
  },

  addToFlipped(state, payload) {
    if(!state.flippedCardList.includes(payload)) {
      state.flippedCardList.push(payload);
    }
  },

  updateHighestSpeed(state) {
    if (!localStorage.getItem('highestSpeed')) {
      return localStorage.setItem('highestSpeed', state.timePassed);
    }
    if (localStorage.getItem('highestSpeed') > state.timePassed) {
      return localStorage.setItem('highestSpeed', state.timePassed);
    }
  },

  setHighscores(state, payload) {
    state.highScores = payload;
  },
}
