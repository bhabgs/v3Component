const globals = {
  vue: "Vue",
  "@antv/g2": "G2",
};
const path = process.env.NODE_ENV === "production" ? "dist/" : "lib/";
const fileName = "chartv";

const output = [];

["iife", "es", "umd"].forEach((item, key) => {
  output.push({
    file: `${path}${fileName}.${item}.js`,
    format: item,
    globals,
    name: "chartv",
  });
});

export default output;
