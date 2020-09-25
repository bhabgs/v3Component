import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";
import cssnano from "cssnano";

const extensions = [".ts", ".js", ".tsx"];

export default [
  typescript({
    lib: ["es5", "es6", "dom"],
    target: "es5",
    noEmitOnError: true,
  }),
  html({
    title: "vchart",
  }),

  resolve({ mainFields: ["module", "main", "browser"] }),
  commonjs({ extensions }),
  babel({ babelHelpers: "bundled", extensions }),
  postcss({
    plugins: [cssnano],
    extract: "dist/css/z-style.css", // 输出路径
  }),
  replace({
    __buildEnv__: "production",
    __buildDate__: () => new Date(),
    __buildVersion: 1,
  }),
];
