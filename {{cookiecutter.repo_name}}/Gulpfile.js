var Gulp = require('gulp'),
    Path = require('path'),
    Gutil = require('gulp-util'),
    WebpackDevServer = require("webpack-dev-server"),
    webpack = require('webpack'),
    sass = require('gulp-sass');


var webpackConfig = {
    entry: './app/index.js',
    output: {
        path: Path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};

Gulp.task('default', ['build']);

Gulp.task('server', ['sass', 'sass:watch'], function(next) {
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        contentBase: Path.join(__dirname, 'public'),
        historyApiFallback: true,
        proxy: {
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        Gutil.log("[webpack-dev-server]", "http://localhost:8080/");
    });
});

Gulp.task('sass', function () {
    Gulp.src('./public/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(Gulp.dest('./public'));
});

Gulp.task('sass:watch', function () {
    Gulp.watch('./public/*.scss', ['sass']);
});

Gulp.task('build', ['sass', 'webpack']);

Gulp.task('webpack', function(next) {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            throw new Gutil.PluginError('webpack', err);
        }
        next();
    });
});
