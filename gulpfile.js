var
    gulp                   = require('gulp'),
    sass                   = require('gulp-sass'),
    autoprefixer           = require('gulp-autoprefixer');
    browserSync            = require('browser-sync'),
    imagemin               = require('gulp-imagemin');
    del                    = require('del'),
    px2rem                 = require('gulp-px2rem'),
    htmlmin                = require('gulp-htmlmin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    critical               = require('critical'),
    reload                 = browserSync.reload
;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('html', function() {
    return gulp.src(['src/*.html', 'src/CNAME'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist'));
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
        .pipe(px2rem())
        .pipe(gulp.dest('dist/stylesheets'))
        .pipe(browserSync.stream());
});

gulp.task('webfonts', function() {
  return gulp.src('src/stylesheets/webfonts/**/*')
    .pipe(gulp.dest('dist/stylesheets/webfonts/'));
});

gulp.task('javascript', function() {
    return gulp.src('src/javascript/**/*.js')
        .pipe(gulp.dest('dist/javascript'));
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
        .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', function(cb) {
    del(['dist/**/*.html', 'dist/stylesheets', 'dist/javascript', 'dist/images'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('html', 'stylesheets', 'webfonts', 'javascript', 'images');
});

gulp.task('watch', ['html', 'stylesheets', 'webfonts', 'javascript', 'images', 'browser-sync'], function() {

    gulp.watch('src/**/*.html', ['html', reload]);
    gulp.watch('src/stylesheets/**/*.scss', ['stylesheets']);
    gulp.watch('src/webfonts/**/*', ['webfonts']);
    gulp.watch('src/javascript/**/*.js', ['javascript']);
    gulp.watch('src/images/**/*', ['images']);

});

gulp.task('critical', function (cb) {
    critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
        dest: 'index.html',
        minify: true,
        width: 1300,
        height: 900
    });
});


gulp.task('minify', function() {
    return gulp.src(['src/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist'));
});
