

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import json from "@eslint/json";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "**/*.js"],
  },
  {
    files: ["**/*.json"],
    plugins: {
      json: json,
    },
    languageOptions: {
      parser: json,
    },
    rules: {
      "json/no-duplicate-keys": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
    },
  },
];


// @ts-check

// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import json from "@eslint/json";

// // export default tseslint.config(
// //   eslint.configs.recommended,
// //   tseslint.configs.recommended,
// // );

// export default [

//   {
// 		plugins: {
// 			json,
//       '@typescript-eslint': tseslint.plugin,
// 		},
// 	},
// 	// lint JSON files
// 	{
// 		files: ["**/*.json"],
// 		language: "json/json",
// 		rules: {
// 			"json/no-duplicate-keys": "error",
//     },
//   },
//   {
//     files: ["**/*.ts", "**/*.tsx"],
//     language: "typescript/ts",
//     rules: {
//       "@typescript-eslint/no-explicit-any": "error",
//       "@typescript-eslint/no-unused-vars": "error",
//       "@typescript-eslint/no-require-imports": "error",
//       "@typescript-eslint/no-shadow": "error",
//       "@typescript-eslint/no-unnecessary-type-constraint": "error",
//       "@typescript-eslint/no-useless-empty-export": "error",
//       "@typescript-eslint/prefer-nullish-coalescing": "error",
//       "@typescript-eslint/prefer-optional-chain": "error",
//     },
//   },
// ];
