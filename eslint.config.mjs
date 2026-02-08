import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default tseslint.config(
  eslint.configs.recommended,
  eslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off',
      'no-multiple-empty-lines': [
        'error',
        { max: 1 }
      ],
      quotes: [
        'error',
        'single',
        { allowTemplateLiterals: true }
      ],
      semi: [
        'error',
        'always'
      ]
    }
  }
);
