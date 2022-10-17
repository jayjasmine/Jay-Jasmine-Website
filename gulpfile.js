const gulp = require("gulp");
const minify = require("gulp-babel-minify");

gulp.task("minify", async () => {
  gulp
    .src("./src/main.js")
    .pipe(
      minify({
        mangle: {
          keepClassName: true,
        },
      })
    )
    .pipe(gulp.dest("./dist"));
});


module.exports = minify;
