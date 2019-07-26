module.exports = {
  'extends': ['airbnb', 'prettier', 'prettier/react'],
  'plugins': ['react', 'prettier', 'jsx-a11y'],
  'rules': {
    'func-names': [
      'error',
      'never',
    ],
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
    'browser': true,
    'es6': true,
  },
};