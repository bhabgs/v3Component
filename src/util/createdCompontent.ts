import { DefineComponent } from "vue";

export default (component: DefineComponent, name: string, version?: string) => {
  return { component, name, version: version || "0.0.1" };
};
