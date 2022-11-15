import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './components/app.vue';
import { routes } from './models/routes';

const app = createApp(App);
const router = createRouter({routes, history: createWebHistory()});
app.use(router);
app.mount('#app');
