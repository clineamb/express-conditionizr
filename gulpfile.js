var gulp    = require('gulp')
,   jshint  = require('gulp-jshint')
,   mocha   = require('gulp-mocha')
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
    return gulp.src('tests/agents.spec.js', {read:false})
        .pipe(mocha({
            reporter: 'nyan',
            bail: true
        }))
    ;
});