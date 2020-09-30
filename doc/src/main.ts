import { createApp } from 'vue';
import chartv from 'v3chart';
import App from './App';

const app = createApp(App);

app.use(chartv);

app.mount('#app');
