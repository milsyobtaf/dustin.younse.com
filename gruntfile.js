module.exports = function (grunt) {

    /*
        Grunt installation:
        -------------------
            npm install -g grunt-cli
            npm install -g grunt-init
            npm init (creates a `package.json` file)

        Project Dependencies:
        ---------------------
            npm install grunt --save-dev
            npm install grunt-contrib-watch --save-dev
            npm install grunt-contrib-sass --save-dev
            npm install grunt-autoprefixer --save-dev
            npm install grunt-contrib-imagemin --save-dev
            npm install load-grunt-tasks --save-dev
            npm install time-grunt --save-dev

        Simple Dependency Install:
        --------------------------
            npm install (from the same root directory as the `package.json` file)

        Gem Dependencies:
        -----------------
            gem install image_optim
    */

    // Displays the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // Load NPM Tasks
    require('load-grunt-tasks')(grunt, ['grunt-*']);

    // Project configuration.
    grunt.initConfig({

        // Store your Package file so you can reference its specific data whenever necessary
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
              options: {
                style: 'compressed'
              },
              files: {
                'css/style.css': 'sass/style.scss'
              },
            },
            dev: {
              options: {
                style: 'expanded'
              },
              files: {
                'css/style.css': 'sass/style.scss'
              },
            },
          },

        autoprefixer: {

            // prefix the specified file
            single_file: {
              options: {
                // Target-specific options go here.
              },
              src: 'css/style.css',
              dest: 'css/style.css'
            },

            diff: {
                options: {
                    diff: true
                },
                src: 'css/style.css',
                dest: 'css/style.css' // -> dest/css/file.css, dest/css/file.css.patch
            },
          },

        // `optimizationLevel` is only applied to PNG files (not JPG)
        // imagemin: {
        //     png: {
        //         options: {
        //             optimizationLevel: 7
        //         },
        //         files: [
        //             {
        //                 expand: true,
        //                 cwd: './app/images/',
        //                 src: ['**/*.png'],
        //                 dest: './app/images/compressed/',
        //                 ext: '.png'
        //             }
        //         ]
        //     },
        //     jpg: {
        //         options: {
        //             progressive: true
        //         },
        //         files: [
        //             {
        //                 expand: true,
        //                 cwd: './app/images/',
        //                 src: ['**/*.jpg'],
        //                 dest: './app/images/compressed/',
        //                 ext: '.jpg'
        //             }
        //         ]
        //     }
        // },

        // Run: `grunt watch` from command line for this section to take effect
        watch : {
            options : {
              livereload: true
            },
            css: {
              files: ['sass/style.scss'],
              tasks: ['sass:dev']
            },
          },

    });

    // CSS Task
    grunt.registerTask('css', ['sass:dev', 'autoprefixer', 'watch']);

    // Release Task
    // grunt.registerTask('release', ['sass:dist', 'imagemin']);

    /*
        Notes:

        When registering a new Task we can also pass in any other registered Tasks.
        e.g. grunt.registerTask('release', 'default requirejs'); // when running this task we also run the 'default' Task

        We don't do this above as we would end up running `sass:dev` when we only want to run `sass:dist`
        We could do it and `sass:dist` would run afterwards, but that means we're compiling sass twice which (although in our example quick) is extra compiling time.

        To run specific sub tasks then use a colon, like so...
        grunt sass:dev
        grunt sass:dist
    */

};
