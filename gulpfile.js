// include plug-ins:
const gulp = require('gulp');
const gutil = require('gulp-util');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer');
const htmlclean = require('gulp-htmlclean');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const gulpIgnore = require('gulp-ignore');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const pump = require('pump');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const mergeRules = require('postcss-merge-rules');
const fontMagicin = require('postcss-font-magician');
const animationMagic = require('postcss-magic-animations');
const animateCSS = require('postcss-animation');
const colorfunction = require('postcss-color-function');
const rgbafallback = require('postcss-color-rgba-fallback');
// src and build :
const htmlSrc = './src/*.html';
const htmlDest = './';
const sassSrc = './src/scss/**/*.scss';
const sassDest = './src/css';
const cssSrc = './src/css/style.css';
const cssDest = './css';
const jsSrc = './src/js/*.js';
const jsDest = './js';
const imgSrc = './src/img/**';
const imgDest = './img';

// compile sass + autoprefix :
function minifySass() {
  let plugins = [fontMagicin, animationMagic, animateCSS, colorfunction, rgbafallback];
  return gulp
    .src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.stream());
}
// minify css:
function minifyCss() {
  return gulp
    .src(cssSrc)
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
}
// watch sass files & serve:
function serverStart() {
  browserSync.init({
    server: './src',
  });
}
// minify Html:
function minifyHtml() {
  return gulp
    .src(htmlSrc)
    .pipe(plumber(function (error) {
      console.error(error.message);
      gulp.emit('finish');
    }))
    .pipe(newer(htmlDest))
    .pipe(htmlclean({
      protect: /<\!--%fooTemplate\b.*?%-->/g,
      edit(html) {
        return html.replace(/\begg(s?)\b/gi, 'omelet$1');
      },
    }))
    .pipe(gulp.dest(htmlDest))
    .pipe(browserSync.stream());
}
// minify js:
function minifyJs() {
  return gulp
    .src(jsSrc)
    .pipe(plumber(function (error) {
      console.error(error.message);
      gulp.emit('finish');
    }))
    .pipe(babel({compact: false}))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
}
// minify image:
function minifyImg() {
  return gulp
    .src(imgSrc)
    .pipe(plumber(function (error) {
      console.error(error.message);
      gulp.emit('finish');
    }))
    .pipe(newer(imgDest))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest))
    .pipe(browserSync.stream());
}

gulp.task('sass', minifySass);
gulp.task('minify-css', minifyCss);
gulp.task('serve', ['sass'], serverStart);
gulp.task('minify-html', minifyHtml);
gulp.task('scripts', minifyJs);
gulp.task('minify-img', minifyImg);
// watch .....................................
function watchChange() {
  gulp.watch(htmlSrc, ['minify-html']);
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(cssSrc, ['minify-css']);
  gulp.watch(jsSrc, ['scripts']);
  gulp.watch(imgSrc, ['minify-img']);
}
gulp.task('default', [
  'serve', 'minify-html', 'minify-css', 'minify-img', 'scripts',
], watchChange);
// ...............................................................
