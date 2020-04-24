const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowsersList: ['last 2 versions'],
            cascade: false 
        }))
        .pipe(sass({
            outputStyle: 'expanded', // nested, compact,compressed
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    //cualquier archivo que termine *.scss
    gulp.watch('scss/*.scss', css)
}

//Registrar funciones como tareas

//task: recibe como parametros el nombre q queremos para esa tarea y la funcion de la tarea.(que ya creamos arriba)
gulp.task('css', css); 
gulp.task('watch', watchFiles);
