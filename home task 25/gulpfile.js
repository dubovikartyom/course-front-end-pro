const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');


function buildJS() {
  return src('src/js/*.js')
    .pipe(babel())
    .pipe(dest('build/js'));
}

function buildCSS(){
    return src('src/css/*.css')
        .pipe(dest('build/css'));
}

function buildHTML(){
    return src('src/html/*.html')
        .pipe(dest('build/html'))
}


exports.default = series(buildJS, buildCSS, buildHTML);
