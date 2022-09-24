import { createApp } from 'vue';
// import VueInstaller from 'vue-pwa-installer';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/style/app.scss';

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(VueInstaller);

app.mount('#app');
