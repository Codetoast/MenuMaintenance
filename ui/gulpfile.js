var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('build', function () {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
    gulp.src('*.html')
        .pipe(gulp.dest('./dist'));
    //gulp.src('bower_components/**/*')
    //    .pipe(gulp.dest('./dist/bower_components/'));
})