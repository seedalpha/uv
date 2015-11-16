/**
 * UserVoice browserify
 */

/**
 * Module dependencies
 */

var script = require('scriptjs');

/**
 * Ployfill
 */

var UserVoice = window.UserVoice || [];

/**
 * Helpers
 */

var helpers = {};

['set', 'identify', 'addTrigger'].forEach(function(cmd) {
  helpers[cmd] = function(params) {
    UserVoice.push([cmd, params]);
  }
});

/**
 * Load script
 */

exports = module.exports = function(key) {
  script('//widget.uservoice.com/' + key + '.js');
  return helpers;
}