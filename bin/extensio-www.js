#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var path = require('path');

// Public node modules.
var _ = require('lodash');
var log = require('captains-log')(rconf);

// Ecosystem dependencies.
var __Grunt = require('sails-hooks/node_modules/sails-hook-grunt');

// Local Sails dependencies.
var Sails = require('sails/lib/app');
var rconf = require('sails/lib/app/configuration/rc');
var Err = require('sails/errors');


/**
 * `$ extens.io www`
 *
 * Run the `www` Grunt task. Build a static `www` directory
 * with all of your front-end assets.
 */

module.exports = function () {
  var wwwPath = path.resolve(process.cwd(), './www');
  var GRUNT_TASK_NAME = 'www';

  var sails = Sails();
  sails.load(_.merge({}, rconf, {
    globals: false,
    hooks: {
      grunt: false
    }
  }), function sailsReady(err) {
    if (err) {
      return Err.fatal.failedToLoadSails(err);
    }

    // Run the Grunt task.
    var Grunt = __Grunt(sails);

    log.info('Compiling assets into standalone `www` directory with the `' + GRUNT_TASK_NAME + '` Grunt task...');
    Grunt.runTask(GRUNT_TASK_NAME);

    // Bind error event.
    sails.on('hook:grunt:error', function (err) {
      log.error('Error occured starting `grunt ' + GRUNT_TASK_NAME + '`');
      log.error('Please resolve any issues and try running `$ extens.io www` again.');
      log.error(err);
      process.exit(1);
    });

    // Task is not actually complete yet. It's just been started.
    // We'll bind an event listener so we know when it is.
    sails.on('hook:grunt:done', function () {
      log.info('Created `www` directory at :: `' + wwwPath + '`.');
      process.exit(0);
    });
  });
};
