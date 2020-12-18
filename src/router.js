import { createRouter, createWebHistory } from 'vue-router';

import MemoryGame from './components/MemoryGame.vue';
import HighScores from './components/HighScores.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/memory' },
    { path: '/memory', component: MemoryGame },
    { path: '/highscores', component: HighScores },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
