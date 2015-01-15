#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var path = require('path');
var Womb = require('child_process');

// Public node modules.
var log = require('captains-log')();

// Local Sails dependencies.
var Sails = require('sails/lib/app');


/**
 * This is here for backwards compatibility
 */

module.exports = function () {

  // Use the app's local Sails framework in `node_modules`
  // if one exists. But first make sure it'll work...
  var appPath = process.cwd();
  var pathToSails = path.resolve(appPath, 'node_modules', 'sails');
  if (!Sails.isLocalSailsValid(pathToSails, appPath)) {

    // Otherwise, use the currently-running instance of
    // the Sails framework through extens.io.
    pathToSails = path.resolve(__dirname, './extensio.js');
  }

  log.info('Running the Sails application in debug mode...');

  // Check whether `node-inspector` is running.
  Womb.exec('ps', function (error, stdout, stderr) {

    // If not, suggest that they run it.
    if (error || stderr || !stdout.toString().match(/node-inspector/)) {
      log.info('You probably want to install/run `node-inspector` to help with debugging!');
      log.info('https://github.com/node-inspector/node-inspector');
    }

    log.info(('(to exit, type ' + '<Ctrl> + C' + ')'));

    // Spin up child process for Sails.
    Womb.spawn('node', ['--debug', pathToSails, 'lift'], {
      stdio: 'inherit'
    });
  });
};
