var gulp            = require('gulp')
var critical = require('critical');

const criticalTask = function () {
    critical.generate({
        inline: true,
        base: '/dist',
        src: 'index.html',
        dest: 'index-critical.html',
        width: 320,
        height: 600
    });
}

gulp.task('critical', criticalTask);
module.exports = criticalTask