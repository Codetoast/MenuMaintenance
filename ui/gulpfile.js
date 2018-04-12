/// <binding ProjectOpened='startup' />
var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var globber = require('glob');
var browserify = require('browserify');
var babelify = require('babelify');
var vueify = require('vueify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer')


gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});


gulp.task('dependencies', function () {
    dependencies = require('./dependencies.json');
    return gulp.src(dependencies)
        .pipe(gulp.dest((file) => {
            return file.base.replace('node_modules', 'dist/node_modules')
        }));
});

gulp.task('vue', function () {
    var b = browserify({
        entries: globber.sync('./src/**/*.js'),
        debug: true,
        transform: [vueify, babelify.configure({ presets: ["es2015"] })]
    });
    return b.bundle()
        .pipe(source('build.js'))
        .pipe(buffer())
        .on('error', gutil.log)
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['vue', 'html', 'dependencies'], function () {

})

gulp.task('startup', function () {
    gulp.start('build');
    watch('src/**/*.(js|vue)', function () {
        gulp.start('vue')
    });
    watch('index.html', function () {
        gulp.start('html')
    });
    watch('dependencies.json', function () {
        gulp.start('dependencies')
    });
})