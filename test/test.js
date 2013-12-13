var Hydro = require('hydro');

t('flat', function(done) {
  var hydro = Hydro();
  hydro.set('attach', global);
  hydro.push('plugins', require('../'));
  hydro.push('tests', __dirname + '/fixtures/test.js');
  hydro.run(function() {
    assert(hydro.suites().length === 3, 'bad number of suites ' + hydro.suites().length);
    assert(hydro.tests().length === 4, 'bad number of tests ' + hydro.tests.length);
    done();
  });
});
