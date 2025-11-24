import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  {
    plugins: {
      ts: typescriptEslint,
    },
    rules: {
      "ts/indent": "error",
    },
  },
  eslintConfigPrettier,
];
