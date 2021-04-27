"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const merge = require("merge-stream");
const gulpless = require('gulp-less');
const gulpautoprefixer = require('gulp-autoprefixer');

//Set styles source file and destination folder
const sourceStyles = './app/styles/main.less';
const sourceStylesWatch = './app/styles/**/*';
const destStylesFolder = './public/css';


// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./public/"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./public/vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./public/vendor/bootstrap'));
  // jQuery
  var jquery = gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./public/vendor/jquery'));
  return merge(bootstrap, jquery);
}

// Gulp Task for Styles - Less and Autoprefixer
function convertLess() {
	const autoPrefixOpts = {
		browsers: [
			'last 2 versions',
			'>5%',
		]
	}
	return gulp
		.src(sourceStyles)
		.pipe(gulpless())
		.pipe(gulpautoprefixer(autoPrefixOpts))
		.pipe(gulp.dest(destStylesFolder));
};

// Watch files
function watchFiles() {
  gulp.watch("./public/**/*.css", browserSyncReload);
  gulp.watch("./public/**/*.html", browserSyncReload);
}

function watchStyles() {
	gulp.watch(sourceStylesWatch, styles);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor);
const watch = gulp.series(build, gulp.parallel(watchFiles, watchStyles, browserSync));
const styles = gulp.series(convertLess);

// Export tasks
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.styles = styles;
exports.default = build;
