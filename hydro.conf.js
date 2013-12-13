/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var plugin = require('./index');

  hydro.set({
    plugins: ['hydro-minimal'],
    suite: 'hydro-flat',
    attach: global,
    formatter: 'hydro-simple',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test/*.js'
    ]
  });

  global.__hydro = hydro;
};
