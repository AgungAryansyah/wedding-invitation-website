import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact.configs.flat.recommended,
    },
    rules: {
      "react/prop-types": "off",
    },
    parser: "@babel/eslint-parser",
  },
];
