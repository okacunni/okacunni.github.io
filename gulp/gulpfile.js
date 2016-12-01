"use strict";

var gulp    = require("gulp");
var plumber = require("gulp-plumber");
var rename  = require('gulp-rename');
var compass = require("gulp-compass");
var autoprefixer = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");

var SOURCE_DIR = "src/";
var SASS_DIR   = "sass/";
var CSS_DIR    = "css/";

var TUMBLR_DIR  = "tumblr.com/";
var TUMBLR_ROOT_DIR = "../" + TUMBLR_DIR;
var TUMBLR_SRC_SASS_DIR = SOURCE_DIR + TUMBLR_DIR + SASS_DIR;
var TUMBLR_SRC_CSS_DIR  = SOURCE_DIR + TUMBLR_DIR + CSS_DIR;
var TUMBLR_SCSS_FILE = TUMBLR_SRC_SASS_DIR + "*.scss";
var TUMBLR_CSS_FILE  = TUMBLR_SRC_CSS_DIR + "*.css";
var TUMBLR_CSS_DEST_DIR = TUMBLR_ROOT + CSS_DIR;

gulp.task("compass-tumblr", function(){
  gulp.src([TUMBLR_SCSS_FILE])
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(compass({
      sass: TUMBLR_SRC_SASS_DIR,
      css: TUMBLR_SRC_CSS_DIR
    }))
    .pipe(gulp.dest(TUMBLR_CSS_DEST_DIR))
    ;
});

gulp.task("minify-tumblr", function(){
  gulp.src([TUMBLR_CSS_FILE])
      .pipe(plumber())
      .pipe(minifyCss({
        'keepBreaks': false
      }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(TUMBLR_CSS_DEST_DIR))
      ;
});

gulp.task("default-tumblr", function(){
  gulp.watch([TUMBLR_SCSS_FILE], ["compass-tumblr", "minify-tumblr"]);
});
