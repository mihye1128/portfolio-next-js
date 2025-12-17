// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

export default [{
  ignores: [
    "**/node_modules/**",
    "**/.next/**",
    "**/out/**",
    "**/public/**",
    "**/dist/**",
    "**/build/**",
    "**/.cache/**",
    "**/.turbo/**",
    "**/next.config.mjs",
    "**/postcss.config.mjs",
    "**/next-env.d.ts",
  ],
}, js.configs.recommended, ...tseslint.configs.recommended, prettierConfig, {
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    "@typescript-eslint/triple-slash-reference": "off",
  },
}, ...storybook.configs["flat/recommended"]];
