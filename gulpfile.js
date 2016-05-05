var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    gulp.src('src/idleListener.js')
        .pipe(rename('idleListener.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    gulp.src('src/idleListener.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);
