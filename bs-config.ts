/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
import browserSync from 'browser-sync';
import { config, DotenvParseOutput } from 'dotenv';
import path from 'path';

const { WORDPRESS_URL } = config().parsed as DotenvParseOutput
const files = ['./lib', './assets', '*.php', './style.css'];

const defaults: browserSync.Options = {
  files,
  watchEvents: ['change', 'add'],
  watch: false,
  single: false,
  watchOptions: {
    ignoreInitial: true
  },
  server: false,
  port: 3000,
  serveStatic: [],
  ghostMode: {
    clicks: true,
    scroll: true,
    forms: {
      submit: true,
      inputs: true,
      toggles: true
    }
  },
  logLevel: 'info',
  logPrefix: 'Browsersync',
  logConnections: false,
  logFileChanges: true,
  logSnippet: true,
  rewriteRules: [],
  open: false,
  browser: 'default',
  cors: false,
  xip: false,
  reloadOnRestart: false,
  notify: true,
  scrollProportionally: true,
  scrollThrottle: 0,
  scrollRestoreTechnique: 'window.name',
  scrollElements: [],
  scrollElementMapping: [],
  reloadDelay: 0,
  reloadDebounce: 500,
  reloadThrottle: 0,
  plugins: [],
  injectChanges: true,
  minify: true,
  localOnly: false,
  codeSync: true,
  timestamps: true,
  clientEvents: [
    'scroll',
    'scroll:element',
    'input:text',
    'input:toggles',
    'form:submit',
    'form:reset',
    'click'
  ],
  socket: {
    path: '/browser-sync/socket.io',
    clientPath: '/browser-sync',
    namespace: '/browser-sync',
    clients: { heartbeatTimeout: 5000 }
  },
  tagNames: {
    less: 'link',
    scss: 'link',
    css: 'link',
    jpg: 'img',
    jpeg: 'img',
    png: 'img',
    svg: 'img',
    gif: 'img',
    js: 'script'
  }
};

const app = {
  ...defaults,
  ui: { port: 3001 },
  proxy: WORDPRESS_URL
};

const coverageJs = {
  ...defaults,
  ui: { port: 7001 },
  port: 7000,
  files: ['coverage/js/lcov-report/index.html'],
  server: {
    baseDir: path.resolve(__dirname, 'coverage/js/lcov-report/'),
    index: 'index.html'
  }
};

const coveragePhp = {
  ...defaults,
  ui: { port: 8001 },
  port: 8000,
  files: ['coverage/php/index.html'],
  server: {
    baseDir: path.resolve(__dirname, 'coverage/php/'),
    index: 'index.html'
  }
};

export default {
  app,
  coverageJs,
  coveragePhp
};
