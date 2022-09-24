module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser',
  },
  globals: {
    google: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    semi: process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-compare-neg-zero': 0,
    'no-trailing-space': 0,
    'linebreak-style': 0,
    'no-shadow': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'no-mixed-operators': 0,
    'object-shorthand': 0,
    'prefer-template': 0,
    'import/no-cycle': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
    //  props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'valid-typeof': 'error',
    'no-empty-function': 'error',
    'require-await': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-assign': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'vars-on-top': 'error',
    'no-unused-vars': 'error',
    'prefer-destructuring': ['error', { object: false, array: false }],
  },
};
