const conf = require('./gulp.conf');
const pkg = require('../package.json');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: false,
    autoWatch: true,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    browsers: [
      'PhantomJS',
      // 'Chrome'
    ],
    frameworks: [
      'jasmine',
      'es6-shim'
    ],
    files: [
      'node_modules/es6-shim/es6-shim.js',
      conf.path.src('index.spec.js'),
      conf.path.src('**/*.html')
    ],
    preprocessors: {
      [conf.path.src('index.spec.js')]: [
        'webpack'
      ],
      [conf.path.src('**/*.html')]: [
        'ng-html2js'
      ]
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: `${conf.paths.src}/`
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    webpack: require('./webpack-test.conf'),
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-shim'),
      require('karma-ng-html2js-preprocessor'),
      require('karma-webpack'),
      require('karma-es6-shim'),
      require('karma-mocha-reporter')
    ]
  };

  config.set(configuration);
};