#!/usr/bin/env node


/**
 * Module dependencies
 */

// Node.js core.
var fs = require('fs');
var path = require('path');
var REPL = require('repl');

// Public node modules.
var _ = require('lodash');
var log = require('captains-log')();

// Local Sails dependencies.
var Sails = require('sails/lib/app');
var rconf = require('sails/lib/app/configuration/rc');
var Err = require('sails/errors');


/**
 * `$ extens.io console`
 *
 * Enter the interactive console (aka REPL) for the application
 * in our working directory.
 */

module.exports = function () {

  log.info('Starting the application in interactive mode...');

  // Now load up the Sails framework for real.
  var sails = Sails();
  sails.lift(_.merge({}, rconf, {}), function (err) {
    if (err) {
      return Err.fatal.failedToLoadSails(err);
    }

    log.info('Welcome to the Sails framework console');
    log.info(('(to exit, type ' + '<Ctrl> + C' + ').'));

    var repl = REPL.start('sails > ');
    try {
      history(repl, path.join(sails.config.paths.tmp, '.node_history'));
    } catch (e) {
      log.verbose('Error finding console history ::', e);
    }
    repl.on('exit', function (err) {
      if (err) {
        log.error(err);
        process.exit(1);
      }
      process.exit(0);
    });
  });
};


/**
 * REPL History
 *
 * Pulled directly from https://github.com/tmpvar/repl.history
 * with the slight tweak of setting historyIndex to -1 so that
 * it works as expected.
 */

function history(repl, file) {

  try {
    var stat = fs.statSync(file);
    repl.rli.history = fs.readFileSync(file, 'utf-8').split('\n').reverse();
    repl.rli.history.shift();
    repl.rli.historyIndex = -1;
  } catch (e) {}

  var fd = fs.openSync(file, 'a');
  var reval = repl.eval;

  repl.rli.addListener('line', function (code) {
    if (code && code !== '.history') {
      fs.write(fd, code + '\n');
    } else {
      repl.rli.historyIndex++;
      repl.rli.history.pop();
    }
  });

  process.on('exit', function () {
    fs.closeSync(fd);
  });

  repl.commands['.history'] = {
    help: 'Show the history',
    action: function () {
      var out = [];
      repl.rli.history.forEach(function (v, k) {
        out.push(v);
      });
      repl.outputStream.write(out.reverse().join('\n') + '\n');
      repl.displayPrompt();
    }
  };
}
