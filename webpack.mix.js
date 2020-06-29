const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

var webpackConfig = {
    plugins: [
      new VuetifyLoaderPlugin()
    ]
};

mix.webpackConfig(webpackConfig);

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
