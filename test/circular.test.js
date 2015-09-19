'use strict';

var chai = require('chai');
var expect = chai.expect;
var cycle = require('../');
var decycle = cycle.decycle;
var retrocycle = cycle.retrocycle;

describe('Json Cycle', function () {

  var arr = [];
  var prev = null;
  var cnt = 100;
  for (var i = 0; i < cnt; ++i) {
    prev = arr[i] = {
      prev: prev
    };
  }
  arr[0].prev = arr[cnt - 1];

  it('should failed with TypeError: Converting circular structure to JSON', function (done) {

    expect(function () {
      JSON.stringify(arr);
    }).to.throw(Error);

    done();
  });

  describe("#decycle + #JSON.stringify", function () {

    it('should not failed after decycle', function (done) {

      expect(function () {
        JSON.stringify(decycle(arr));
      }).to.not.throw(Error);

      done();
    });

    it("should not failed with circular objects", function () {
      var foo = {
        prop: "dummy"
      };
      foo.bar = foo;

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular objects with intermediaries", function () {
      var foo = {
        prop: "dummy"
      };
      foo.bar = {
        foo: foo
      };

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular objects deeper", function () {
      var foo = {
        prop: "dummy",

        bar: {
          prop: "dummy"
        }
      };
      foo.bar.self = foo.bar;

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular objects deeper with intermediaries", function () {
      var foo = {
        prop: "dummy",

        bar: {
          prop: "dummy"
        }
      };
      foo.bar.zoo = {
        self: foo.bar
      };

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular objects in an array", function() {
      var foo = {
        prop: "dummy"
      };
      foo.bar = [foo, foo];

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular objects deeper in an array", function() {
      var foo = {
        prop: "dummy",

        bar: [{
          prop: "dummy"
        }, {
          prop: "dummy2"
        }]
      };
      foo.bar[0].self = foo.bar[0];
      foo.bar[1].self = foo.bar[1];

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular arrays", function() {
      var foo = [];
      foo.push(foo);
      foo.push(foo);

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular arrays with intermediaries", function() {
      var foo = [];
      foo.push({ bar: foo });
      foo.push({ bar: foo });

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular repeated objects in objects", function() {
      var foo = {};
      var bar = {
        prop: "dummy"
      };
      foo.bar1 = bar;
      foo.bar2 = bar;

      expect(function () {
        JSON.stringify(decycle(foo));
      }).to.not.throw(Error);
    });

    it("should not failed with circular repeated objects in arrays", function() {
      var foo = {
        prop: "dummy"
      };
      var bar = [foo, foo];

      expect(function () {
        JSON.stringify(decycle(bar));
      }).to.not.throw(Error);
    });
  });

  it('should be the same after retrocycling on decycled structure', function (done) {
    expect(arr).to.deep.equal(retrocycle(decycle(arr)));

    done();
  });
});
