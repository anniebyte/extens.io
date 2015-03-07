#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var path = require('path');

// Ecosystem dependencies.
var generate = require('sails-generate');

// Local dependencies.
var package = require('../package.json');


/**
 * `$ extens.io new`
 *
 * Generate a new application on
 * top of the Sails framework.
 */

module.exports = function () {

  // Pass the original CLI arguments down to the generator.
  var cliArguments = Array.prototype.slice.call(arguments);

  // Build initial scope.
  scope = {
    rootPath: process.cwd(),
    sailsRoot: path.resolve(__dirname, '..'),
    generatorType: 'new',
    args: cliArguments,
    sailsPackageJSON: package
  };

  // Pass the original CLI arguments down to the generator
  // (but first, remove commander's extra argument)
  var cliArguments = Array.prototype.slice.call(arguments);
  cliArguments.pop();
  scope.args = cliArguments;

  scope.generatorType = 'new';

  return generate(scope, {
    success: function () {}
  });
};
