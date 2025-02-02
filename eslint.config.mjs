import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    files: ["webpack.*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "no-undef": "off",
      "no-console": "off"
    }
  }
];