// include plug-ins:
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var newer = require("gulp-newer");
var htmlclean = require("gulp-htmlclean");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var concatCss = require("gulp-concat-css");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var babel = require('gulp-babel');
var pump = require("pump");
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var mergeRules = require("postcss-merge-rules");
var fontMagicin = require("postcss-font-magician");
var animationMagic = require("postcss-magic-animations");
var animateCSS = require("postcss-animation");
var colorfunction = require("postcss-color-function");
var rgbafallback = require("postcss-color-rgba-fallback");
// src and build :
var htmlSrc = "./src/*.html";
var htmlDest = "./";
var sassSrc = "./src/scss/**/*.scss";
var sassDest = "./src/css";
var cssDest = "./css";
var jsSrc = "./src/js/*.js";
var jsDest = "./js";
var imgSrc = "./src/img/**";
var imgDest = "./img";

// compile sass + autoprefix :
gulp.task("sass", function () {
  var plugins = [fontMagicin, animationMagic, animateCSS, colorfunction, rgbafallback];
  return gulp
    .src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.stream());
});

// minify css:
gulp.task("minify-css", function () {
  return gulp
    .src("./src/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDest));
});

// watch sass files & serve:
gulp.task("serve", ["sass"], function () {
  browserSync.init({
    server: "./src"
  });
});

// minify Html:
gulp.task("minify-html", function () {
  return gulp
    .src(htmlSrc)
    .pipe(plumber())
    .pipe(newer(htmlDest))
    .pipe(htmlclean({
      protect: /<\!--%fooTemplate\b.*?%-->/g,
      edit: function (html) {
        return html.replace(/\begg(s?)\b/gi, "omelet$1");
      }
    }))
    .pipe(gulp.dest(htmlDest))
    .pipe(browserSync.stream());
});

// minify js:
gulp.task("scripts", function () {
  return gulp
    .src(jsSrc)
    .pipe(newer(jsDest))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
});

// minify image:
gulp.task("minify-img", function () {
  return gulp
    .src(imgSrc)
    .pipe(plumber())
    .pipe(newer(imgDest))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest))
    .pipe(browserSync.stream());
});
// Concatenate js: .....................................
gulp.task("default", [
  "serve", "minify-html", "minify-css", "minify-img", "scripts"
], function () {
  /* HTML watch */
  gulp.watch(htmlSrc, ["minify-html"]);

  /* SASS watch */
  gulp.watch(sassSrc, ["sass"]);
  gulp.watch("./src/css/*.css", ["minify-css"]);

  /* JS watch */
  gulp.watch(jsSrc, ["scripts"]);

  /* img watch */
  gulp.watch(imgSrc, ["minify-img"]);
});