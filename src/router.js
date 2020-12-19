import { createRouter, createWebHistory } from 'vue-router';

import MemoryGame from './components/MemoryGame.vue';
import HighScores from './components/HighScores.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', redirect: '/memory' },
  { 
    path: '/memory', 
    component: MemoryGame,
    name: 'Memory',
    meta: {
      title: 'Memory',
      metaTags: [
        {
          name: 'Memory Game made with Vue.js',
          content: 'A Memory Game'
        }
      ]
    }
  },
  { path: '/highscores', component: HighScores, name: 'Highscores', meta: {
    title: 'Highscores'
  } },
  { path: '/:notFound(.*)', component: NotFound, name: 'Page Not Found', meta: {
    title: 'Page Not Found'
  } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
