// include plug-ins:
let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let newer = require('gulp-newer');
let htmlclean = require('gulp-htmlclean');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let concatCss = require('gulp-concat-css');
let imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify');
let gulpIgnore = require('gulp-ignore');
let plumber = require('gulp-plumber');
let babel = require('gulp-babel');
let pump = require('pump');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let postcss = require('gulp-postcss');
let mergeRules = require('postcss-merge-rules');
let fontMagicin = require('postcss-font-magician');
let animationMagic = require('postcss-magic-animations');
let animateCSS = require('postcss-animation');
let colorfunction = require('postcss-color-function');
let rgbafallback = require('postcss-color-rgba-fallback');
// src and build :
let htmlSrc = './src/*.html';
let htmlDest = './';
let sassSrc = './src/scss/**/*.scss';
let sassDest = './src/css';
let cssDest = './css';
let jsSrc = './src/js/*.js';
let jsDest = './js';
let imgSrc = './src/img/**';
let imgDest = './img';

// compile sass + autoprefix :
gulp.task('sass', function () {
  let plugins = [fontMagicin, animationMagic, animateCSS, colorfunction, rgbafallback];
  return gulp
    .src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.stream());
});

// minify css:
gulp.task('minify-css', function () {
  return gulp
    .src('./src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDest));
});

// watch sass files & serve:
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './src',
  });
});

// minify Html:
gulp.task('minify-html', function () {
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
        return html.replace(/\begg(s?)\b/gi, "omelet$1");
      },
    }))
    .pipe(gulp.dest(htmlDest))
    .pipe(browserSync.stream());
});

// minify js:
gulp.task('scripts', function () {
  return gulp
    .src(jsSrc)
    .pipe(plumber(function (error) {
      console.error(error.message);
      gulp.emit('finish');
    }))
    .pipe(sourcemaps.init())
    .pipe(newer(jsDest))
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(gulpIgnore.exclude(["**/*.map"]))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
});

// minify image:
gulp.task('minify-img', function () {
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
});
// Concatenate js: .....................................
gulp.task('default', [
  'serve', 'minify-html', 'minify-css', 'minify-img', 'scripts',
], function () {
  /* HTML watch */
  gulp.watch(htmlSrc, ['minify-html']);

  /* SASS watch */
  gulp.watch(sassSrc, ['sass']);
  gulp.watch('./src/css/*.css', ['minify-css']);

  /* JS watch */
  gulp.watch(jsSrc, ['scripts']);

  /* img watch */
  gulp.watch(imgSrc, ['minify-img']);
});
