const gulp 					= require('gulp')
const sass 					= require('gulp-sass')
const cssmin 				= require('gulp-cssmin')
const autoprefixer 	= require('gulp-autoprefixer')
const concat 				= require('gulp-concat')

gulp.task('compile', function() {
  gulp.src('helpers/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(concat('helpers.min.css'))
	  .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['compile'])

gulp.task('watch', function() {
  gulp.watch(['./helpers/**/*.scss', './index.scss'], ['compile'])
})