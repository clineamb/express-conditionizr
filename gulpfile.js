var gulp    = require('gulp')
,   jshint  = require('gulp-jshint')
;


gulp.task('jshint', function() {
    return gulp.src([
        "./lib/**/*.js",
        "./test/**/*.js",
        "./index.js"
    ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
    ;
});
