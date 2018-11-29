var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    mincss = require('gulp-cssnano');

var sassOptions = {
    outputStyle: 'expanded'
};
      
var prefixerOptions = {
    browsers: ['last 2 versions']
};

gulp.task('styles', function(){

    return gulp.src('./page/sass/main.scss')
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(rename('estilos.css'))
        .pipe(gulp.dest('./page/css'))
        .pipe(mincss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./page/css'));

});
