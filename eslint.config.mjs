import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'no-console': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    ignorePatterns: ['node_modules/', '.next/', 'out/'],
  }),
];

export default eslintConfig;
