module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style": [
      0,
      "error",
      "windows"
    ],
    "semi": 0,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "prefer-destructuring": 0,
    "max-len": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "func-names": ["error", "never"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
