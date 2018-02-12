var
    gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    del          = require('del'),
    htmlmin      = require('gulp-htmlmin'),
    imagemin    = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    px2rem                 = require('gulp-px2rem'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass')
;

gulp.task('html', function() {
    return gulp.src(['src/*.html', 'src/CNAME'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('static'));
});

gulp.task('stylesheets', function() {
    return gulp.src('src/stylesheets/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(px2rem({
            replace: true
        }))
        .pipe(gulp.dest('static/stylesheets'))
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin([
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('static/images'));
});

gulp.task('webfonts', function() {
    return gulp.src('src/stylesheets/webfonts/**/*')
        .pipe(gulp.dest('static/stylesheets/webfonts/'));
});

gulp.task('javascript', function() {
    return gulp.src('src/javascript/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/javascript'));
});

gulp.task('clean', function(cb) {
    del(['static/stylesheets', 'static/images', 'static/javascript'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('stylesheets', 'images', 'webfonts', 'javascript');
});

gulp.task('watch', ['html', 'stylesheets', 'images', 'webfonts', 'javascript'], function() {

    gulp.watch('src/stylesheets/**/*.scss', ['stylesheets']);

    gulp.watch('src/images/**/*', ['images']);

    gulp.watch('src/webfonts/**/*', ['webfonts']);

    gulp.watch('src/javascript/**/*.js', ['javascript']);

});
