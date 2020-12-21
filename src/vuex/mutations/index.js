export default {
  reset(state, newState) {
    state.leftMatched = newState.leftMatched;
    state.highestSpeed = newState.highestSpeed;
    state.status = newState.status;
    state.cards = newState.cards;
    state.timePassed = newState.timePassed;
  },

  updateStatus(state, newStatus) {
    state.status = newStatus;
  },

  decreaseMatch(state) {
    state.leftMatched--;
  },

  flip(state, card) {
    let c = state.cards.find(cc => cc === card);
    c.flipped = !c.flipped;
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
  }
}
