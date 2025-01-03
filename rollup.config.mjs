import { readFileSync } from "fs";
import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import { minify } from 'rollup-plugin-esbuild-minify'
import typescriptEngine from "typescript";
import json from "@rollup/plugin-json";
const packageJson = JSON.parse(readFileSync("./package.json"));

export default defineConfig(
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
        exports: "named",
        name: packageJson.name,
        compact: true,
      },
      {
        file: packageJson.module,
        format: "es",
        exports: "named",
        sourcemap: false,
        compact: true,
      },
    ],
    plugins: [
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        typescript: typescriptEngine,
        sourceMap: false,
        exclude: [
          "config",
          "dist",
          "node_modules/**",
          "*.cjs",
          "*.mjs",
          "tools",
        ],
      }),
      json(),
      minify()
    ],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.(sc|sa|c)ss$/],
    plugins: [dts()],
  }
);
