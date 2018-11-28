var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('sass', function(){

    return gulp.src('./page/sass/estilos.scss').pipe(sass()).pipe(gulp.dest('./page/css'));

});

gulp.task('watch', function(){

    watch('./page/sass/**/*.scss', function(){
        gulp.start('sass');
    });

});