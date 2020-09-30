import bar from "@/package/bar";
import { App } from "vue";

const component: Array<any> = [bar];
const version = "0.0.1";

const install = (app: App) => {
  component.map((item) => {
    app.use(item);
  });
};

export default {
  install,
  version,
};
