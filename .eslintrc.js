module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['standard', 'prettier', 'plugin:vue/recommended', '@vue/typescript/recommended'],
  rules: {
    'no-debugger': 'error',
    'no-console': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
