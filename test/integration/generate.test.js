/**
 * Module dependencies
 */

// Node.js core.
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var util = require('util');
var exec = require('child_process').exec;

// Public node modules.
var _ = require('lodash');
var wrench = require('wrench');

// Test helpers.
var appHelper = require('sails/test/integration/helpers/appHelper');


/**
 * Test to generate a new application
 */

describe('New application generator', function () {
  var extensioBin = path.resolve(__dirname, '../../bin/extensio.js');
  var appName = 'testApp';

  this.slow(1000);

  beforeEach(function (done) {
    fs.exists(appName, function (exists) {
      if (exists) {
        wrench.rmdirSyncRecursive(appName);
      }
      done();
    });
  });

  afterEach(function (done) {
    fs.exists(appName, function (exists) {
      if (exists) {
        wrench.rmdirSyncRecursive(appName);
      }
      done();
    });
  });

  describe('`extens.io new <appName>`', function () {
    it('should create new, liftable application in new directory', function (done) {
      exec(extensioBin + ' new ' + appName, function (err) {
        if (err) {
          return done(new Error(err));
        }
        appHelper.lift({
          log: {
            level: 'silent'
          }
        }, function (err, sailsprocess) {
          if (err) {
            return done(err);
          }
          sailsprocess.once('hook:http:listening', function () {
            sailsprocess.kill(done);
          });
        });
      });
    });

    it('should not overwrite a directory', function (done) {
      exec('mkdir ' + appName, function (err) {
        if (err) {
          return done(new Error(err));
        }
        exec('touch ' + appName + '/test', function (err) {
          if (err) {
            return done(new Error(err));
          }
          exec(extensioBin + ' new ' + appName, function (err, dumb, result) {
            assert.notEqual(result.indexOf('error'), -1);
            done();
          });
        });
      });
    });
  });
});



describe('API and adapter generators', function () {

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var extensioBin = path.resolve(__dirname, '../../bin/extensio.js');
  var appName = 'testApp';

  this.slow(1000);

  before(function (done) {
    if (fs.existsSync(appName)) {
      wrench.rmdirSyncRecursive(appName);
    }

    exec(extensioBin + ' new ' + appName, function (err) {
      if (err) {
        done(new Error(err));
      }

      // Move into app directory and update extensioBin relative path
      process.chdir(appName);
      extensioBin = path.resolve(__dirname, '../../../bin/extensio.js');

      done();
    });
  });

  after(function (done) {

    // return to test directory
    process.chdir('../');

    if (fs.existsSync(appName)) {
      wrench.rmdirSyncRecursive(appName);
    }

    done();
  });

  describe('extens.io generate model <modelName>', function () {
    var modelName = 'user';

    it('should create a model file in models folder', function (done) {
      console.log(process.cwd());
      exec(extensioBin + ' generate model ' + modelName, function (err) {
        if (err) {
          done(new Error(err));
        }

        assert.doesNotThrow(function () {
          fs.readFileSync(path.resolve(process.cwd(), 'api/models/' + capitalize(modelName) + '.js'), 'utf8');
        });

        done();
      });
    });

    it('should throw an error if a model with the same name exists', function (done) {
      exec(extensioBin + ' generate model ' + modelName, function (err) {
        assert.equal(err.code, 1);
        done();
      });
    });
  });

  describe('extens.io generate controller <controllerName>', function () {
    var controllerName = 'user';

    it('should create a controller file in controllers folder', function (done) {
      exec(extensioBin + ' generate controller ' + controllerName, function (err) {
        if (err) {
          done(new Error(err));
        }

        assert.doesNotThrow(function () {
          fs.readFileSync('./api/controllers/' + capitalize(controllerName) + 'Controller.js', 'utf8');
        });

        done();
      });
    });

    it('should throw an error if a controller with the same name exists', function (done) {
      exec(extensioBin + ' generate controller ' + controllerName, function (err) {
        assert.equal(err.code, 1);
        done();
      });
    });
  });

  describe('extens.io generate', function () {
    var modelName = 'post';

    it('should display usage if no generator name is specified', function (done) {
      exec(extensioBin + ' generate', function (err, dumb, response) {
        assert.notEqual(response.indexOf('Usage'), -1);
        done();
      });
    });
  });

  describe('extens.io generate api <apiname>', function () {
    var apiName = 'foo';

    it('should display usage if no api name is specified', function (done) {
      exec(extensioBin + ' generate api', function (err, dumb, response) {
        assert.notEqual(response.indexOf('Usage'), -1);
        done();
      });
    });

    it('should create a controller and a model file', function (done) {
      exec(extensioBin + ' generate api ' + apiName, function (err) {
        if (err) {
          done(new Error(err));
        }

        assert.doesNotThrow(function () {
          fs.readFileSync('./api/models/' + capitalize(apiName) + '.js', 'utf8');
        });

        assert.doesNotThrow(function () {
          fs.readFileSync('./api/controllers/' + capitalize(apiName) + 'Controller.js', 'utf8');
        });

        done();
      });
    });

    it('should throw an error if a controller file and model file with the same name exists', function (done) {
      exec(extensioBin + ' generate api ' + apiName, function (err) {
        assert.equal(err.code, 1);
        done();
      });
    });
  });
});
