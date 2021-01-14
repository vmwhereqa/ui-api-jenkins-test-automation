module.exports = {
  env: {
    browser: true,
    es6: true,
    'webdriverio/wdio': true,
    node: true,
    commonjs: true,
    mongo: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:chai-friendly/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    node: true,
  },
  plugins: ['webdriverio'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.steps.js', '*.hooks.js'],
      rules: {
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
      },
    },
  ],
};
