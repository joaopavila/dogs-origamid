module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  plugins: ['import', 'react'],
};
