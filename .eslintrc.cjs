module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "vue/no-v-text-v-html-on-component": 0,
    "vue/no-v-html": 0,
    "prettier/prettier": 0,
  },
};
