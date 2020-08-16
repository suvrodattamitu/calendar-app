const mix = require('laravel-mix');

mix.js('resources/js/boot.js', 'public/js/boot.js')
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

var webpackConfig = {
    plugins: [
      new VuetifyLoaderPlugin()
    ]
};

mix.webpackConfig(webpackConfig);


