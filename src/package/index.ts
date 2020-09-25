import bar from "@/package/bar";
import { DefineComponent } from "vue";

const component: Array<DefineComponent> = [bar];
const version = "0.0.1";

const install = (app) => {
  component.map((item) => {
    app.use(item);
  });
};

export default {
  install,
  version,
};
