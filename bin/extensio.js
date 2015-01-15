#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var exec = require('child_process').exec;

// Public node modules.
var _ = require('lodash');

// Local dependencies.
var program = require('./_commander');
var package = require('../package.json');

// Needed.
var NOOP = function () {};
var cmd;


/**
 * Normalize version argument
 *
 * `$ extens.io -v`
 * `$ extens.io -V`
 * `$ extens.io --version`
 * `$ extens.io version`
 */

// Expose version.
program
  .version(package.version, '-v, --version');

// Make `-v` option case-insensitive.
process.argv = _.map(process.argv, function (arg) {
  return (arg === '-V') ? '-v' : arg;
});

// Common options.
program
  .option('--silent', 'without any logs')
  .option('--verbose', 'with debug logs')
  .option('--silly', 'with silly logs')
  .usage('[command]')
  .unknownOption = NOOP;

// `$ extens.io version` (--version synonym)
cmd = program.command('version');
cmd.description('output your version of extens.io.')
cmd.action(program.versionInformation);

// `$ extens.io lift`
cmd = program.command('lift');
cmd.option('--prod', 'lift your Sails application in a production environment');
cmd.option('--port [port]', 'lift your Sails application using a specific port');
cmd.unknownOption = NOOP;
cmd.description('lift your Sails server');
cmd.action(require('./extensio-lift'));

// `$ extens.io new <name>`
cmd = program.command('new [pathToNewApp]');
cmd.usage('[pathToNewApp]');
cmd.option('--no-frontend', 'generate a new Sails application without front-end');
cmd.option('--viewEngine [viewEngine]', 'generate a new Sails application with a specific template engine');
cmd.option('--template [viewEngine]', 'generate a new Sails application with a specific template engine');
cmd.unknownOption = NOOP;
cmd.description('create a new application ');
cmd.action(require('./extensio-new'));

// `$ extens.io generate <generatorName>`
cmd = program.command('generate');
cmd.unknownOption = NOOP;
cmd.description('generate something using the Sails CLI');
cmd.usage('[something] like `new`, `api`, `module`, `plugin`, etc.');
cmd.action(require('./extensio-generate'));

// `$ extens.io console`
cmd = program.command('console');
cmd.unknownOption = NOOP;
cmd.description('open the Sails console');
cmd.action(require('./extensio-console'));

// `$ extens.io www`
cmd = program.command('www');
cmd.unknownOption = NOOP;
cmd.description('build assets for production');
cmd.action(require('./extensio-www'));

// `$ extens.io debug`
cmd = program.command('debug');
cmd.unknownOption = NOOP;
cmd.description('run debugger');
cmd.action(require('./extensio-debug'));


/**
 * Normalize help argument
 *
 * `$ extens.io --help`
 * `$ extens.io help`
 * `$ extens.io`
 * `$ extens.io <unrecognized_cmd>`
 */

// `$ extens.io help` (--help synonym)
cmd = program.command('help');
cmd.description('output the help');
cmd.action(program.usageMinusWildcard);

// `$ extens.io <unrecognized_cmd>`
// Mask the '*' in `help`.
cmd = program.command('*');
cmd.action(program.usageMinusWildcard);

// Don't balk at unknown options.
program.unknownOption = NOOP;


/**
 * `$ extens.io`
 */

program.parse(process.argv);
var NO_COMMAND_SPECIFIED = program.args.length === 0;
if (NO_COMMAND_SPECIFIED) {
  program.usageMinusWildcard();
}
