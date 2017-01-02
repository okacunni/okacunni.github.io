"use strict";

var gulp    = require("gulp");
var plumber = require("gulp-plumber");
var rename  = require('gulp-rename');
var header  = require('gulp-header');
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
var TUMBLR_DEST_CSS_DIR  = TUMBLR_ROOT_DIR + CSS_DIR;

var TUMBLR_SRC_SCSS_FILE = TUMBLR_SRC_SASS_DIR + "*.scss";
var TUMBLR_SRC_CSS_FILE  = TUMBLR_SRC_CSS_DIR + "*.css";

gulp.task("compile-tumblr", function(){
  gulp.src([TUMBLR_SRC_SCSS_FILE])
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
    .pipe(header("@charset \"UTF-8\";\n\n"))
    .pipe(minifyCss({
      'keepBreaks': false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(TUMBLR_DEST_CSS_DIR))
    ;
});

gulp.task("build-tumblr", ["compile-tumblr"], function(){
  console.log("build complete");
});

gulp.task("watch", function(){
  gulp.watch([TUMBLR_SRC_SCSS_FILE], ["build-tumblr"]);
});
