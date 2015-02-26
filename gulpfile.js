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


gulp.task('test', function() {
    return gulp.src('tests/*.spec.js', {read:false})
        .pipe(mocha({
            reporter: 'nyan'
        }))
    ;
});