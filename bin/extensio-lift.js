#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var path = require('path');

// Public node modules.
var log = require('captains-log')();

// Local Sails dependencies.
var Sails = require('sails/lib/app');

// Local dependencies.
var package = require('../package.json');


/**
 * `$ extens.io lift`
 *
 * Expose method which lifts the appropriate instance of Sails
 * (fire up the Sails application in our working directory).
 */

module.exports = function () {

  log.info('Starting the server...');

  // Build initial scope, mixing-in `rc` config.
  var scope = {
    rootPath: process.cwd(),
    sailsPackageJSON: package
  };

  // Use the current directory as application path.
  var appPath = process.cwd();

  // Use the app's local `extens.io` in `node_modules` if it's existant and valid.
  // It shouldn't happen but we never know.
  var localSailsPath = path.resolve(appPath, 'node_modules', 'extens.io');
  if (Sails.isLocalSailsValid(localSailsPath, appPath)) {
    var localSails = require(localSailsPath);
    localSails.lift(scope, afterwards);
    return;
  }

  // Otherwise, if no workable local extens.io exists, run the app
  // using the currently running version of extens.io. This is
  // probably always the global install.
  var globalSails = Sails();
  globalSails.lift(scope, afterwards);

  function afterwards(err, sails) {
    if (err) {
      var message = err.stack ? err.stack : err;
      sails ? sails.log.error(message) : log.error(message);
      process.exit(1);
    }
  }
};
