var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var vueify = require('vueify');
const source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('publish', function(){
  
});

gulp.task('build:app', function() {
  return browserify({ entries: ['app/main.js']})
    .transform(babelify, {presets: ['es2015']})
    .transform(vueify)
    .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('build'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync({server: {baseDir: '.'}, notify: true});
});

gulp.task('watch', ['browser-sync', 'build:app'], function() {
  gulp.watch('app/**/*.+(js|vue)', ['build:app']);
});