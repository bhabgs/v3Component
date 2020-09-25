import { createApp } from "vue";
import chartv from "../../lib/chartv.es";
import App from "./App.vue";

const app = createApp(App);

app.use(chartv);

app.mount("#app");
