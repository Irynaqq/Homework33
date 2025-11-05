const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer").default;
const browserSync = require("browser-sync").create();

const paths = {
  scss: "src/scss/**/*.scss",
  html: "src/**/*.html",
  dist: "dist",
};

// SCSS → CSS + префиксы + минификация
function styles() {
  return gulp
    .src(paths.scss, { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: false,
      })
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest(paths.dist + "/css", { sourcemaps: "." }))
    .pipe(browserSync.stream());
}

// Копируем HTML
function html() {
  return gulp.src(paths.html).pipe(gulp.dest(paths.dist)).pipe(browserSync.stream());
}

// Локальный сервер + вотчеры
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist,
    },
    notify: false,
    open: true,
  });

  gulp.watch(paths.scss, styles);
  gulp.watch(paths.html, html).on("change", browserSync.reload);
}

exports.styles = styles;
exports.html = html;
exports.serve = serve;

exports.build = gulp.series(styles, html);
exports.default = gulp.series(styles, html, serve);
