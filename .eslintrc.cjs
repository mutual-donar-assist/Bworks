module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'standard-with-typescript',
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: [
          '.eslintrc.js',
          '.eslintrc.cjs',
        ],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['react'],
    rules: {
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  