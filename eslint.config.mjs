// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import json from "@eslint/json";

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.recommended,
// );

export default [

  {
		plugins: {
			json,
      tseslint,
		},
	},
	// lint JSON files
	{
		files: ["**/*.json"],
		language: "json/json",
		rules: {
			"json/no-duplicate-keys": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    language: "typescript/ts",
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
    },
  },
];
