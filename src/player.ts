import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import PlayerApp from './components/player-app.vue';
import { routes } from './models/routes';

const app = createApp(PlayerApp);
const router = createRouter({routes, history: createWebHistory()});
app.use(router);
app.mount('#app');
