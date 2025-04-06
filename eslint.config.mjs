// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  stylistic: {
    quotes: "double",
    semi: true,
    indent: 2,
  },
  typescript: true,
  vue: true,
  linterOptions: {},
  rules: {
    "style/operator-linebreak": ["error", "before"],
    "@typescript-eslint/consistent-type-export": ["warn"]
  },
});
