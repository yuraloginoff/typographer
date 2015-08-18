(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#typographer', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is available on jquery object', function () {
    expect(1);
    ok($.fn.typographer, 'should be accessible on a collection');
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.typographer(), this.elems, 'should be chainable');
  });

  test('adds unbreakable spaces to element\'s text', function() {
    expect(1);
    this.elems.typographer();
    strictEqual(this.elems.html(), 'Проверка плагина на&nbsp;работоспособность.', 'should add &nbsp;');
  });

}(jQuery));
