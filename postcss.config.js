const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project.
  content: [
    './pages/*.js',
    './pages/*.jsx',
    './pages/*.html',
    './pages/**/*.js',
    './pages/**/*.jsx',
    './pages/**/*.html',
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.html',
    './src/**/**/*.jsx',
    './src/**/**/*.html',
    './src/**/**/**/*.js',
    './src/**/**/**/*.jsx',
    './src/**/**/**/*.html',
    './src/**/**/**/**/*.js',
    './src/**/**/**/**/*.jsx',
    './src/**/**/**/**/*.html',
    // etc.
  ],

  // Include any special characters you're using in this regular expression.
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/%]+/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
