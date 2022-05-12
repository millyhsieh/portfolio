const gulp = require('gulp');
const { src, dest, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin')

function compileJS() {
  return src('src/js/*.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(dest('docs/js'));
}

function compileCSS() {
  return src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('docs/css'))
};

function minifyImage() {
  return src('./src/image/**')
    .pipe(imagemin())
    .pipe(dest('docs/image'))
}

function watch() {
  gulp.watch('src/image/*', gulp.series(minifyImage));
  gulp.watch('src/scss/**/*.scss', gulp.series(compileCSS));
  gulp.watch('src/js/**/*.js', gulp.series(compileJS));
}

const build = gulp.series(minifyImage, compileCSS, compileJS, watch)
exports.default = build;