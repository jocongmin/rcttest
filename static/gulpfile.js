// 引入 gulp
var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var spriter = require('gulp-css-spriter');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var base64 = require('gulp-base64');
var webserver = require('gulp-webserver'); // 本地服务器
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('gulp-run-sequence');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
//压缩，合并 js
gulp.task('jsmin', function() {
    return gulp.src('js/build/*.js')
        .pipe(concat('all.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});
gulp.task('cssmin', function() {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('prefix', function() {
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('css/style.css'));
});
// 注册任务
gulp.task('webserver', function() {
    gulp.src('./') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            directoryListing: true,
            open: true // 服务器启动时自动打开网页
        }));
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./scsspage/all.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 Chrome versions', 'last 3 Safari versions', 'Android >= 4.0', 'iOS 7'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('./css'));
});

// 监听任务
gulp.task('watch', function() {
    /* gulp.watch('*.html', ['html']); */ // 监听根目录下所有.html文件
    gulp.watch('./scss/*.scss', ['sass']);
});

// 默认任务
gulp.task('default', ['webserver', 'watch']);

gulp.task('sprite', function() {

    var timestamp = +new Date();
    //需要自动合并雪碧图的样式文件
    return gulp.src('./scss/testbg.css')
        .pipe(spriter({
            // 生成的spriter的位置
            'spriteSheet': './img/' + timestamp + '.png',
            // 生成样式文件图片引用地址的路径
            // 如下将生产：backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '../img/' + timestamp + '.png'
        }))
        //产出路径
        .pipe(gulp.dest('./test'));
});



gulp.task('icon', function() {
    return gulp.src('./img/icon/*.png') //需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'img/sprite.png', //保存合并后图片的地址
            cssName: 'scss/_bg.scss', //保存合并后对于css样式的地址
            padding: 50, //合并时两个图片的间距
            algorithm: 'binary-tree', //注释1
            cssTemplate: function(data) {
                var arr = [];
                data.sprites.forEach(function(sprite) {
                    $width = parseInt(sprite.px.width) + 5;
                    $height = parseInt(sprite.px.height) + 5;
                    $ofx = parseInt(sprite.px.offset_x) + 2;
                    $ofy = parseInt(sprite.px.offset_y) + 2;
                    arr.push(".bg-" + sprite.name +
                        "{" +
                        "background-image: url(" + sprite.escaped_image + ");" +
                        "background-position: " + $ofx + "px " + $ofy + "px;" +
                        "width:" + $width + "px;" +
                        "height:" + $height + "px;" +
                        "background-repeat:" + "no-repeat;" +
                        "}\n");
                });
                return arr.join("");
            }

        }))
        .pipe(gulp.dest('./'));
});

gulp.task('iconsass', function(cb) {
    runSequence('icon', 'sass', cb);
});



gulp.task('imagemin', function() {
    return gulp.src('./img/sprite.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./img/'))
});



gulp.task('base', ['sass'], function() {
    return gulp.src('./scss/_reset.scss')
        .pipe(base64({
            baseDir: 'xgou',
            extensions: ['png'],
            maxImageSize: 20 * 1024,
            debug: false
        }))
        .pipe(gulp.dest('./scss/'));
});