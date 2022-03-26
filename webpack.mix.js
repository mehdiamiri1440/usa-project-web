let mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');
const webpack = require("webpack");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.webpackConfig({
   output: {
      chunkFilename: 'chunks/[name].[chunkhash].js',
      publicPath: '/',
   },
   plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
   ]

});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


// if (!mix.inProduction()) {
//    mix.bundleAnalyzer();
// }

