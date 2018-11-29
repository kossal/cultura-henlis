var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', ['styles'], function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "page"
        }
    });

    watch('./page/**/*.html', function() {
        gulp.start('html');
    });

    watch('./page/sass/**/*.scss', function() {
        gulp.start('cssInject');
    });

});

gulp.task('html', function() {
    browserSync.reload();
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./page/css/estilos.min.css')
        .pipe(browserSync.stream());
});