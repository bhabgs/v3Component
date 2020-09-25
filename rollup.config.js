import plugins from "./build/plugins";
// import VuePlugin from "rollup-plugin-vue";
import jsx from "acorn-jsx";
import output from "./build/output";

const isDev = process.env.NODE_ENV !== "production";

export default {
  input: "src/package/index.ts",
  output,
  plugins,
  acornInjectPlugins: [jsx()],
  external: ["vue", "@antv/g2"],
};
