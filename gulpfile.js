//首先引入gulp模块
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//npm install gulp-nodemon --save-dev
//npm install browser-sync --save-dev
gulp.task('nodemon',function(ab){
	var ft =false;
	return nodemon ({
		script:'./server.js'
	} ).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});

gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:16928'
		},
		files:["*"],
		port:16928,
		open:false,
		notify:false
	})
});

gulp.task('stylus',function(){
	//获取要编译的文件
	//指定一个文件
	//gulp.src('./stylus/index.styl')
	//指定多个文件
	//gulp.src('./stylus/index.styl','./stylus/index.styl')
	//指定一个目录下所有（不包含子目录）
	//gulp.src('./stylus/*.styl')
	//指定一个目录及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		//执行stulus编译
		.pipe(stylus())
		//输出编译后的文件
		.pipe(gulp.dest('./public/css'))
});

gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/mincss'))
});

gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))
});

gulp.task('watcher',['browserSync','stylus','uglify'],function(){
	gulp.watch("./stylus/**/*.styl",['stylus']);
	gulp.watch("./public/js/**/*.js",['uglify']);
	gulp.watch(["./public/css/**/*.css",
		"./public/minjs/**/*.js"] ).on('change',function(){
			reload();
	})
});

//创建一个default任务
gulp.task("default",function(){
	console.log('this default')
});

gulp.task('es6',function(){
	console.log('this is es6')
});

gulp.task('css',function(){
	console.log('this is css')
});

//先执行es6，执行完成后再执行 minijs
gulp.task('minijs',['es6'],function(){
	console.log('this is minijs')
});


gulp.task('all',[,'es6','css','minijs'],function(){
	console.log('this is all')
});


