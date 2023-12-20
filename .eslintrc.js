module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'knexfile.js'],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      "@typescript-eslint/no-unused-vars": [
              "warn",
              { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
          ],
      'no-console': 'error',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports-ts': 'warn',
    },
  };
