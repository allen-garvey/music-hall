import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Player from './components/player.vue';
import { routes } from './models/routes';

const app = createApp(Player);
const router = createRouter({routes, history: createWebHistory()});
app.use(router);
app.mount('#app');
