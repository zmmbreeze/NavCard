var util = require('gulp-util');
var dest = util.env.target || './test';
var src = './src';

module.exports = {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for less sourcemap linking
            baseDir: [dest, src]
        },
        files: [
            dest + '/**',
            // Exclude Map files
            '!' + dest + '/**.map'
        ]
    },
    less: {
        src: src + '/css/*.{less,css}',
        watchSrc: src + '/css/**/*.{less,css}',
        dest: dest + '/css'
    },
    markup: {
        src: src + '/**/*.{mustache, html}',
        dest: dest,
        data: {}
    },
    images: {
        src: src + '/imgs/**',
        dest: dest + '/imgs'
    },
    browserify: {
        src: src,
        dest: dest,
        // Enable source maps
        debug: true
    }
};
