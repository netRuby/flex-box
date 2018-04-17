var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("default",function () {
    gulp.watch("./src/**.scss",["sass"]);    
});

gulp.task("scss",function () {
    gulp.src('./src/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade:false
        }))
        .pipe(gulp.dest('./dist'));
});

