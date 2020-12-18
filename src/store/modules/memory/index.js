// export default {
//   namespaced: true,
//   state() {
//     return {
//       cards: [
//         {
//           cardId: '0',
//           name: 'Charizard',
//           url: 'https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_11.png',
//           type: 'fire',
//           visible: 'false'
//         },
//         {
//           cardId: '1',
//           name: 'Ninetales',
//           url: 'https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_15.png',
//           type: 'fire',
//           visible: 'false'
//         },
//       ],
//       pendingCardIds: [],
//       turns: 0,
//       currentGuess: 0,
//       score: 0,    // TODO: make dynamic
//       maxScore: 2, // TODO: make dynamic
//       cardId1: null,
//       cardId2: null,
//       gameFinished: false,
//       pointScored: false,
//       roundLost: false
//     };
//   },
//   getters: {
//     allCards(state) {
//       return state.cards;
//     },
//     shouldShowCard(state) {
//       if (state.currentGuess === 1) {
//         return true;
//       } else if (state.currentGuess === 2) {
//         if (state.pointScored) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     },
//     hideOrShow(state) {
//       if (state.currentGuess === 1) {
//         return true;
//       } else if (state.currentGuess === 2) {
//         state.currentGuess = 0;
//         if (state.pointScored) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     },
//     hideTheseCards(state) {
//       if (state.currentGuess === 2 && state.roundLost) {
//         state.roundLost = false;
//         return state.pendingCardIds;        
//       } else {
//         return null;
//       }
//     }
//   },
//   mutations: {
//     // mutations mutate the state
//     checkCardFlip(state, payload) {
//       console.log(payload);
//       if (state.currentGuess === 0) {
//         state.cardId1 = payload.cardId;
//         state.pendingCardIds.push(payload.id);
//       } else if (state.currentGuess === 1) {
//         state.cardId2 = payload.cardId;
//         state.pendingCardIds.push(payload.id);
//       }
//       state.currentGuess++;
//       if (state.currentGuess === 2) {
//         state.turns++;
//         if (state.cardId1 === state.cardId2) {
//           console.log('you guessed correctly!');
//           state.score++;
//           // set cards to remain visible
//         } else {
//           console.log('wrong! Try again!')
//           state.roundLost = true;
//           console.log(payload);
//           console.log(state.cards.find(cards => cards.cardId === state.cardId1));
//           console.log(state.cards.find(cards => cards.cardId === state.cardId2));
//           console.log(state.pendingCardIds);

//           // set cards back to invisible
//           // get card by id's (cardId1) & (cardId2)
//         }
//       }
//     }

//   },
//   actions: {
//     // actions commit mutations
//     flipCard(context, payload) {
//       context.commit('checkCardFlip', payload);
//     }
//   },
// };
