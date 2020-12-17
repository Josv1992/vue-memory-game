import { createRouter, createWebHistory } from 'vue-router';

import MemoryGame from './pages/memory/MemoryGame.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/memory' },
    { path: '/memory', component: MemoryGame },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
