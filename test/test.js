var Hydro = require('hydro');

t('flat', function(done) {
  var hydro = Hydro();
  hydro.set('attach', global);
  hydro.push('plugins', require('../'));
  hydro.push('tests', __dirname + '/fixtures/1.js');
  hydro.run(function() {
    assert(hydro.suites().length === 3, 'bad number of suites ' + hydro.suites().length);
    assert(hydro.tests().length === 4, 'bad number of tests ' + hydro.tests.length);
    done();
  });
});

t('current suite', function(done) {
  var hydro = Hydro();

  hydro.set('globals', 'before', function(str) {
    hydro.stack[0].before = str;
  });
  hydro.set('attach', global);
  hydro.push('plugins', require('../'));
  hydro.push('tests', __dirname + '/fixtures/2.js');

  hydro.run(function() {
    var suites = hydro.suites();
    suites[1].before == 'foo';
    suites[2].before == 'bar';
    done();
  });
});
