module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json"
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-typescript"],
  rules: {
    "no-console": "off"
  }
};
