var gulp = require('gulp');
var less = require('gulp-less');
var dependencies = require('./dependencies.json');


gulp.task('less', function () {
    return gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('dependencies', function () {
    return gulp.src(dependencies)
        .pipe(gulp.dest((file) => {
            return file.base.replace('node_modules', 'dist/node_modules')
        }));
});

gulp.task('vue', function () {

});

gulp.task('build', ['vue', 'html', 'dependencies', 'less'], function () {
})

gulp.task('startup', function () {

})