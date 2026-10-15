import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  { ignores: ["dist"] },
  js.configs.recommended,
  { ...react.configs.flat.recommended, settings: { react: { version: "detect" } } },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: { "react/prop-types": "off", "react/react-in-jsx-scope": "off", "no-unused-vars": "warn" },
  },
  { files: ["server/**/*.js", "vite.config.js"], languageOptions: { globals: globals.node } },
];
