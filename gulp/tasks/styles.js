var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    mincss = require('gulp-cssnano'),
    cssImport = require('gulp-cssimport');

var sassOptions = {
    outputStyle: 'expanded'
};
      
var prefixerOptions = {
    browsers: ['last 2 versions']
};

gulp.task('styles', function(){

    return gulp.src('./page/sass/main.scss')
        .pipe(sass(sassOptions))
        .pipe(cssImport({
            includePaths: ['./node_modules/normalize.css']
        }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(autoprefixer(prefixerOptions))
        .pipe(rename('estilos.css'))
        .pipe(gulp.dest('./page/css'))
        .pipe(mincss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./page/css'));

});
