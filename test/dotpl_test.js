'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dotpl = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/index.html');
    var expected = grunt.file.read('test/expected/index.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  zh_cn_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/zh-cn/index.html');
    var expected = grunt.file.read('test/expected/zh-cn/index.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
