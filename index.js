/**
 * Set UI proxies.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var suite = null;

  hydro.set('globals', 'suite', function(title) {
    if (hydro.stack.length !== 1) hydro.stack.shift();
    suite = hydro.addSuite(title);
    hydro.stack.unshift(suite);
  });

  hydro.set('globals', 'test', function() {
    var test = hydro.createTest.apply(hydro, arguments);
    suite.addTest(test);
  });
};
