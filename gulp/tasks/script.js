const gulp = require('gulp')
const eslint =require('gulp-eslint')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const soursemaps = require('gulp-sourcemaps')

exports.default = function script(cb){
    gulp.src('src/ja/main.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel({
            predets:['@babel/env']
        }))
        .pipe(terser())
        .pipe(soursemaps.write())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('dist/js'))
        return cb()
}