#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var path = require('path');

// Public node modules.
var _ = require('lodash');

// Ecosystem dependencies.
var generate = require('sails-generate');

// Local Sails dependencies.
var rconf = require('sails/lib/app/configuration/rc');

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
    sailsPackageJSON: package,
    viewEngine: rconf.viewEngine,
    modules: {}
  };

  // Support `--template` option for backwards-compatibility.
  if (!scope.viewEngine && rconf.template) {
    scope.viewEngine = rconf.template;
  }

  // Use `ejs` if no template engine specified.
  if (!scope.viewEngine) {
    scope.viewEngine = scope.args[1]['template'] || 'ejs';
  }

  // Mix-in rconf.
  _.merge(scope, rconf.generators);

  // TODO: just do a top-level merge and reference
  // `scope.generators.modules` as needed (simpler)
  _.merge(scope, rconf);

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
