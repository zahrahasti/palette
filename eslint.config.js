import jsESLint from '@eslint/js'
import antfuConfig from '@antfu/eslint-config'
import stylisticJs from '@stylistic/eslint-plugin'
import eslintPluginSvelte from 'eslint-plugin-svelte'

const jsRules = {
  ...jsESLint.configs.recommended.rules,
  'no-await-in-loop': 'error',
  'no-self-compare': 'error',
  'no-unreachable-loop': 'error',
  'no-inner-declarations': 'error',
  'array-callback-return': 'error',
  'no-useless-assignment': 'error',
  'no-constructor-return': 'error',
  'require-atomic-updates': 'error',
  'no-async-promise-executor': 'error',
  'no-template-curly-in-string': 'error',
  'no-promise-executor-return': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-use-before-define': ['error', 'nofunc'],
  'use-isnan': ['error', { enforceForIndexOf: true }],
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      ignoreClassWithStaticInitBlock: true,
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      ignoreRestSiblings: true,
    },
  ],
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  /* Suggestions */
  'yoda': 'error',
  'strict': 'error',
  'no-var': 'error',
  'eqeqeq': 'error',
  'no-new': 'error',
  'no-eval': 'error',
  'no-void': 'error',
  'new-cap': 'error',
  'no-proto': 'error',
  'no-caller': 'error',
  'no-empty': 'error',
  'no-eq-null': 'error',
  'sort-imports': 'off',
  'no-redeclare': 'off',
  'complexity': 'error',
  'no-plusplus': 'error',
  'no-iterator': 'error',
  'no-continue': 'error',
  'no-lonely-if': 'error',
  'max-params': 'error',
  'no-shadow': ['error'],
  'no-label-var': 'error',
  'no-new-func': 'error',
  'no-multi-str': 'error',
  'guard-for-in': 'error',
  'no-loop-func': 'error',
  'default-case': 'error',
  'no-script-url': 'error',
  'prefer-const': 'error',
  'no-undefined': 'error',
  'no-undef-init': 'error',
  'require-await': 'error',
  'no-extra-bind': 'error',
  'prefer-spread': 'error',
  'no-lone-blocks': 'error',
  'no-extra-label': 'error',
  'accessor-pairs': 'error',
  'no-useless-call': 'error',
  'no-implied-eval': 'error',
  'consistent-this': 'error',
  'no-octal-escape': 'error',
  'no-throw-literal': 'error',
  'prefer-template': 'error',
  'no-new-wrappers': 'error',
  'block-scoped-var': 'error',
  'no-extend-native': 'error',
  'default-case-last': 'error',
  'object-shorthand': 'error',
  'no-useless-return': 'error',
  'consistent-return': 'error',
  'no-useless-concat': 'error',
  'no-param-reassign': 'error',
  'no-nested-ternary': 'error',
  'no-useless-rename': 'error',
  'no-implicit-globals': 'error',
  'default-param-last': 'error',
  'symbol-description': 'error',
  'curly': ['error', 'multi-line'],
  'prefer-rest-params': 'error',
  'max-statements-per-line': 'off',
  'radix': ['error', 'as-needed'],
  'func-name-matching': 'error',
  'operator-assignment': 'error',
  'no-unneeded-ternary': 'error',
  'no-array-constructor': 'error',
  'prefer-destructuring': 'error',
  'no-underscore-dangle': 'off',
  'prefer-object-spread': 'error',
  'no-object-constructor': 'error',
  'prefer-object-has-own': 'error',
  'no-useless-constructor': 'error',
  'class-methods-use-this': 'error',
  'prefer-numeric-literals': 'error',
  'no-useless-computed-key': 'error',
  'max-nested-callbacks': ['error', 3],
  'no-return-assign': ['error', 'always'],
  'prefer-named-capture-group': 'error',
  'no-bitwise': ['error', { int32Hint: true }],
  'prefer-exponentiation-operator': 'error',
  'import/extensions': 'off',
  'dot-notation': ['error', { allowKeywords: false }],
  'logical-assignment-operators': ['error', 'always'],
  'no-sequences': ['error', { allowInParentheses: false }],
  'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
  'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
  'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
  'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
  'no-restricted-exports': ['error', {
    restrictDefaultExports: {
      named: true,
      namedFrom: true,
      defaultFrom: true,
      namespaceFrom: true,
    },
  }],
}
const tsRules = {
  '@typescript-eslint/max-statements-per-line': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/ban-types': 'off',
}
const stylisticRules = {
  ...stylisticJs.configs['recommended-flat'].rules,
  'style/no-tabs': 'off',
  'style/semi-style': 'off',
  'style/no-extra-semi': 'off',
  'style/spaced-comment': 'off',
  'style/no-mixed-spaces-and-tabs': 'off',
}
const generalRules = {
  'import/order': 'off',
  'style/no-tabs': 'off',
  'antfu/if-newline': 'off',
  'unused-imports/no-unused-vars': 'off',
  'style/max-statements-per-line': 'off',
  'svelte/valid-compile': 'off',
  'style/no-mixed-spaces-and-tabs': 'off',
  'one-var': 'off',
}
export default antfuConfig(
  {
    files: ['**/*.js', '**/*.ts', 'src/**/.svelte'],
    typescript: true,
    rules: { ...jsRules, ...tsRules, ...stylisticRules },
    svelte: true,
  },
  {
    settings: {
      svelte: {
        compileOptions: {
          postcss: {
            configFilePath: './postcss.config.js',
          },
        },
        kit: {
          files: {
            routes: 'src/routes',
          },
        },
      },
    },
  },
  {
    plugins: stylisticJs,
    rules: {
      '@stylistic/js/max-statements-per-line': 'off',
    },
  },
  { rules: generalRules },
  ...eslintPluginSvelte.configs['flat/base'],
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  { rules:
    {
      'svelte/valid-compile': 'off',
    },
  },
  { ignores: ['**/*.json', 'env.d.ts'] },
)
