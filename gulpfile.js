var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
 	ssi = require('gulp-html-ssi'),
	uglify = require('gulp-uglify'),
	runSequence = require('run-sequence');
	//out = require('gulp-out'); //파일명에 min 붙임

var JS = 'js',
    CSS = 'css',
    IMG = 'img',
    FONTS = 'fonts';

var path = {
	dist : './dist/',
	build : '../forgetes.github.io/' // 배포판을 위해서 하나 더 만듦
};

//자바스크립트 파일을 minify
gulp.task('uglify', function () {
    return gulp.src('./dev/js/**/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest(path.dist+JS))
        .pipe(gulp.dest(path.build+JS))
        .pipe(connect.reload());
});

//sass 파일 컴파일
gulp.task('sass', function(){
	return gulp.src('./dev/css/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(path.dist+CSS))
	.pipe(gulp.dest(path.build+CSS))
	.pipe(connect.reload());
});

gulp.task('htmlSSI', function() {
     gulp.src('./dev/**/*.html')
    .pipe(ssi())
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build));
});

gulp.task('html', function(){
	gulp.src('./dist/**/*.html')
	.pipe(connect.reload());
})

//빌드시 빌드 폴더로 이미지 이동 
gulp.task('img', function(){
	gulp.src('./dev/img/**/*.*')
	.pipe(gulp.dest(path.dist+IMG))
	.pipe(gulp.dest(path.build+IMG))
	.pipe(connect.reload());
})

//빌드시 빌드 폴더로 폰트 이동
gulp.task('fonts', function(){
	gulp.src(['./dev/fonts/**/*.*'])
	.pipe(gulp.dest(path.dist+FONTS))
	.pipe(gulp.dest(path.build+FONTS))
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
	gulp.watch('./dev/js/**/*.js',['uglify']);
	gulp.watch('./dev/**/*.html', ['htmlSSI','html']);
	gulp.watch('./dev/img/**/*.*', ['img']);
	gulp.watch('./dev/fonts/**/*.*',['fonts']);	
});

//빌드
gulp.task('build', ['sass', 'htmlSSI']);

//gulp를 실행하면 수행할 default 작업
gulp.task('default', function (done) {
	//빌드(uglify, minifycss, minifyhtml)를 병렬로 수행한 뒤, 그 다음 server 와 watch 를 병렬로 수행
	return runSequence('build', ['html','img','fonts','connect','watch']);
});

//참고 https://github.com/eu81273/gulp-step-by-step/blob/master/step13_run_sequence/gulpfile.js