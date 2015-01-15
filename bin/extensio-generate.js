#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var path = require('path');
var util = require('util');

// Public node modules.
var _ = require('lodash');
var log = require('captains-log')(rconf);
var reportback = require('reportback')();

// Ecosystem dependencies.
var generate = require('sails-generate');

// Local Sails dependencies.
var rconf = require('sails/lib/app/configuration/rc');

// Local dependencies.
var package = require('../package.json');


/**
 * `$ extens.io generate`
 *
 * Generate module(s) for the application in our working directory.
 */

module.exports = function () {

  // Pass the original CLI arguments down to the generator
  // (but first, remove commander's extra argument).
  // Also peel off the `generatorType` arg.
  var cliArguments = Array.prototype.slice.call(arguments);
  cliArguments.pop();

  // Build initial scope.
  var scope = {
    rootPath: process.cwd(),
    sailsRoot: path.resolve(__dirname, '..'),
    generatorType: cliArguments.shift(),
    generatorName: process.argv[2],
    args: cliArguments,
    sailsPackageJSON: package,
    modules: {}
  };

  // Check that we're in a valid Sails project.
  if (scope.generatorType != 'new') {
    var pathToPackageJSON = path.resolve(scope.rootPath, 'package.json');
    var package, invalidPackageJSON;

    try {
      package = require(pathToPackageJSON);
    } catch (e) {
      invalidPackageJSON = true;
    }

    if (invalidPackageJSON) {
      return log.error('Sorry, this command can only be used in the root directory of a Sails project.');
    }
  }

  // Mix-in rc config.
  _.merge(scope, rconf.generators);

  // TODO: Just do a top-level merge and reference
  // `scope.generators.modules` as needed (simpler).
  _.merge(scope, rconf);

  // Create a new reportback.
  var cb = reportback.extend();

  // Show usage if no generator type is defined.
  if (!scope.generatorType) {
    return log.error('Usage :: extens.io generate [something]');
  }

  // Set the `invalid` exit to forward to `error`.
  cb.error = function (msg) {
    var log = this.log || cb.log;
    log.error(msg);
    process.exit(1);
  };

  cb.invalid = 'error';

  // Run whichever generator was requested.
  cb.success = function () {

    // Infer the `outputPath` if necessary/possible.
    if (!scope.outputPath && scope.filename && scope.destDir) {
      scope.outputPath = scope.destDir + scope.filename;
    }

    if (scope.generatorType != 'new') {
      log.info(util.format('Generated a new %s `%s` at `%s`', scope.generatorType, scope.humanizeId, scope.humanizedPath));
    }
  };

  return generate(scope, cb);
};
