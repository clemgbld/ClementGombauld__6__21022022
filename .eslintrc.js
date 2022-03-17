module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    window: true,
    module: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
