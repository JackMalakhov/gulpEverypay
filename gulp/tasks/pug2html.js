const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')



module.exports = function pug2html(cb){
    return gulp.src('src/pug/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({
            reporter: 'default'
        }))
        .pipe(pug({
            pretty: true
        }))
        
        .pipe(gulp.dest('dist'))
}