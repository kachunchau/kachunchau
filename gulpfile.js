var
    gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    del          = require('del'),
    htmlmin      = require('gulp-htmlmin'),
    CleanCSS               = require('clean-css');
    imagemin        = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    px2rem                 = require('gulp-px2rem'),
    uglify       = require('gulp-uglify'),
    critical     = require('critical');
    map          = require('vinyl-map'),
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
    // this snippet basically replaces `gulp-minify-css`
    var minify = map(function (buff, filename) {
        return new CleanCSS({
        // specify your clean-css options here
        level: {
            1:  {
                specialComments: 0
            },
            2: {
                mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
                mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
                mergeMedia: true, // controls `@media` merging; defaults to true
                mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
                mergeSemantically: false, // controls semantic merging; defaults to false
                overrideProperties: true, // controls property overriding based on understandability; defaults to true
                removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
                reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
                removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
                removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
                removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
                removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
                restructureRules: true, // controls rule restructuring; defaults to false
                skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
            }
        }
        }).minify(buff.toString()).styles;
    });

    return gulp.src('src/stylesheets/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(px2rem({
            replace: true
        }))
        .pipe(minify)
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

gulp.task('critical', function (cb) {
    return gulp.src('public/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'));

    critical.generate({
        inline: true,
        base: 'public/',
        src: 'index.html',
        dest: 'index.html',
        minify: true,
        width: 1300,
        height: 900
    });
});