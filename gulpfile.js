var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
 	ssi = require('gulp-html-ssi'),
	uglify = require('gulp-uglify');

//자바스크립트 파일을 minify
gulp.task('uglify', function () {
    return gulp.src('./dev/js/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest('./dist/js/')); 
});

//sass 파일 컴파일
gulp.task('sass', function(){
	return gulp.src('./dev/css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css/'))
	.pipe(connect.reload());
});

gulp.task('htmlSSI', function() {
     gulp.src('./dev/**/*.html')
    .pipe(ssi())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function(){
	gulp.src('./dist/*.html')
	.pipe(connect.reload());
})

gulp.task('connect',function(){
	connect.server({
		root: 'dist',
		port : 7117,
		livereload: true
	});
});

gulp.task('watch', function(){
	gulp.watch('./dev/css/*.scss',['sass']);
	gulp.watch('./dev/js/*.js',['uglify']);
	gulp.watch('./dev/*.html', ['htmlSSI','html']);	
});

gulp.task('default', ['sass','html','htmlSSI','connect','watch']);

