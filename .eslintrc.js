module.exports = {
  'extends': [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  'plugins': [
    'react',
    'prettier',
    'jsx-a11y',
    'react-hooks',
  ],
  'rules': {
    'func-names': [
      'error',
      'never',
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'semi': [
      'error',
      'always',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', 'jsx'],
      },
    ],
    'prettier/prettier': 'error',
    'max-len': ['error', 100],
  },
  'env': {
    'amd': true,
    'browser': true,
    'es6': true,
    'node': true,
  },
};