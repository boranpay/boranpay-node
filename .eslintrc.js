module.exports = {
  env: {
    browser: true,
    commonjs: true,
    amd: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    camelcase: ['error', { ignoreGlobals: true }],
    'no-plusplus': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
};
