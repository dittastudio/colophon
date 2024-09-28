import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  rules: {
    'antfu/top-level-function': 'off',
    'toml/indent': ['error', 2, { subTables: 1, keyValuePairs: 1 }],
    'curly': 'off',
    'no-console': 'off',
    'node/prefer-global/process': 'off',
  },
})
