const globals = {
  vue: "Vue",
  "@antv/g2": "G2",
};
const path = process.env.NODE_ENV === "production" ? "lib/" : "doc/src/package";
const output = [];

if (process.env.NODE_ENV === "production") {
  ["iife", "es", "umd"].forEach((item, key) => {
    output.push({
      dir: path + item,
      format: item,
      globals,
      name: "chartv",
    });
  });
} else {
  output.push({
    dir: path,
    format: "es",
    globals,
    name: "chartv",
  });
}

export default output;
