/**
 * Dependencies
 */

const spawn = require('child_process').spawn;


/**
 * Expose Leeroy
 */

module.exports = LeeroyJenkinsError;


/**
 * Leeroy Jenkins himself
 */

function LeeroyJenkinsError (message) {
  spawn('afplay', [__dirname + '/leeroy.wav']).unref();
  
  return new _Error(message);
}

const _Error = Error;

LeeroyJenkinsError.prototype = new _Error();
LeeroyJenkinsError.prototype.constructor = LeeroyJenkinsError;

global.Error = LeeroyJenkinsError; // oh yeah
