const gulp = require('gulp');
const server = require('gulp-server-livereload')

gulp.task('build', (cb) => {

    console.log('construyendo la app');

    setTimeout(cb, 1200);

})

gulp.task('serve', cb => {
    gulp.src('www')
        .pipe(server({
            livereload: false,
            open: true,
        }));
})

gulp.task('default', gulp.series('build', 'serve'))