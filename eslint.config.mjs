// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "eol-last": "off",
    "vue/html-self-closing": "off",
    "vue/no-multiple-template-root": "off"
  },
});
