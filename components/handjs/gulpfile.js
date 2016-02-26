var gulp = require('gulp-param')(require('gulp'), process.argv),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');
    
    
gulp.task('base', function() {
  return gulp.src(['hand.base.js'])
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('css', function() {
  return gulp.src(['hand.css.js'])
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});
    
gulp.task('default', ['base', 'css'], function() {
  return gulp.src([
      'hand.base.js',
      'hand.css.js',
    ])
    .pipe(concat('hand.js'))
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});
