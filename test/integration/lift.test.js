/**
 * Module dependencies
 */

// Node.js core.
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

// Public node modules.
var assert = require('assert');
var wrench = require('wrench');
var request = require('request');

// Make `existsSync` not crash on older versions of Node.js.
fs.existsSync = fs.existsSync || require('path').existsSync;


/**
 * Test to lift an application
 */

describe('Starting the Sails server with lift', function () {
  var extensioBin = path.resolve(__dirname, '../../bin/extensio.js');
  var appName = 'testApp';
  var sailsServer;

  before(function () {
    if (fs.existsSync(appName)) {
      wrench.rmdirSyncRecursive(appName);
    }
  });

  after(function () {
    process.chdir('../');
    if (fs.existsSync(appName)) {
      wrench.rmdirSyncRecursive(appName);
    }
  });

  describe('in an empty directory', function () {
    before(function () {

      // Make empty folder and move into it.
      fs.mkdirSync('empty');
      process.chdir('empty');
      path.resolve(__dirname, '../../../bin/extensio.js');
    });

    after(function () {

      // Delete empty folder and move out of it.
      process.chdir('../');
      fs.rmdirSync('empty');
      extensioBin = path.resolve(__dirname, '../../bin/extensio.js');
    });
  });


  describe('in an extens.io application directory', function () {
    it('should start the server without error', function (done) {
      exec(extensioBin + ' new ' + appName, function (err) {
        if (err) done(new Error(err));

        // Move into app directory
        process.chdir(appName);
        extensioBin = path.resolve(__dirname, '../../../bin/extensio.js');

        sailsServer = spawn(extensioBin, ['lift', '--port=1342']);

        sailsServer.stdout.on('data', function (data) {
          var dataString = data + '';
          assert(dataString.indexOf('error') === -1);
          sailsServer.stdout.removeAllListeners('data');
          sailsServer.kill();

          // Move out of app directory.
          process.chdir('../');
          done();
        });
      });
    });

    it('the admin dashboard should respond', function (done) {

      // Move into app directory.
      process.chdir(appName);

      // Lift the server.
      sailsServer = spawn(extensioBin, ['lift', '--port=1342']);
      sailsServer.stdout.on('data', function (data) {
        var dataString = data + '';

        // Server has finished starting up.
        // Test if the admin sends a `200` response.
        if (dataString.match(/Server lifted/)) {
          sailsServer.stdout.removeAllListeners('data');
          setTimeout(function () {
            request('http://localhost:1342/admin', function (err, response) {
              if (err) {
                sailsServer.kill();
                done(new Error(err));
              }

              assert(response.statusCode === 200);
              sailsServer.kill();
              // process.chdir('../');
              return done();
            });
          }, 1000);
        }
      });
    });
  });
});
