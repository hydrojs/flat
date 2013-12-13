/**
 * Set UI proxies.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var suite = null;

  hydro.set('globals', 'suite', function(title) {
    suite = hydro.addSuite(title, function(){});
  });

  hydro.set('globals', 'test', function() {
    var test = hydro.createTest.apply(hydro, arguments);
    suite.addTest(test);
  });
};
