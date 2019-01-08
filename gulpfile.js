const gulp = require("gulp"),
	  htmlmin = require("gulp-htmlmin"),
	  cleanCss = require("gulp-clean-css"),
	  uglify = require("gulp-uglify"),
	  babel = require("gulp-babel"),
	  sass = require("gulp-sass"),
	  connect = require("gulp-connect");
	
gulp.task("html",function(){
	gulp.src("app/index.html")
	 	.pipe(htmlmin({
	 		removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true
	 	}))
	 	.pipe(gulp.dest("dist"))
	 	.pipe(connect.reload());
	 	
gulp.src("app/html/**/*.html")
	 	.pipe(htmlmin({
	 		removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true
	 	}))
	 	.pipe(gulp.dest("dist/html"))
	 	.pipe(connect.reload());
})
gulp.task("css",function(){
	gulp.src("app/scss/**/*.scss")
			.pipe(sass())
			.pipe(cleanCss())
			.pipe(gulp.dest("dist/css"))
			.pipe(connect.reload());
})
gulp.task("js",function(){
	gulp.src("app/js/**/*.js")
		.pipe(babel({
			presets:["@babel/env"]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
})
gulp.task("libs", function(){
	gulp.src("app/libs/**/*")
			.pipe(gulp.dest("dist/libs"))
})
gulp.task("server",function(){
	//开启服务器
	connect.server({
		livereload:true,
		port:1809,
		root:"dist"
	})
})
gulp.task("static",function(){
	gulp.src("app/static/**/*")
		.pipe(gulp.dest("dist/static"));
})
gulp.task("watch",function(){
	gulp.watch("app/index.html",["html"]);
	gulp.watch("app/html/**/*.html",["html"]);
	gulp.watch("app/css/**/*.css",["css"]);
	gulp.watch("app/js/**/*.js",["js"]);
	gulp.watch("app/images/**/*",["images"]);
})
gulp.task("default",["html","css","js","static","libs","server","watch"])
