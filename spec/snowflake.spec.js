var s = require('../src/snowflake').snowflake;

describe('snowflake', function() {
  var run, fn;
  beforeEach(function() {
    s.reset();
    run = 0;
    fn = function() {
      return ++run;
    };
  });

  describe('once', function() {
    it('should run once', function() {
      expect(s.once(fn)).toEqual(1);
      expect(s.once(fn)).toBeUndefined();
      expect(run).toEqual(1);
      expect(s.once(fn)).toBeUndefined();
      expect(run).toEqual(1);
    });

    it('should return return value only when run', function() {
      expect(s.once(fn)).toEqual(1);
      expect(s.once(fn)).toBeUndefined();
    });
  });

  describe('every', function() {
    it('should run every 10ms', function() {
      runs(function() {
        expect(s.every(fn, 10));
      });
      waits(15);
      runs(function() {
        expect(s.every(fn, 10));
        expect(run).toEqual(1);
      });
      waits(15);
      runs(function() {
        expect(s.every(fn, 10));
        expect(run).toEqual(2);
      });
    });

    it('should return return value only when run', function() {
      runs(function() {
        expect(s.every(fn, 10));
      });
      waits(15);
      runs(function() {
        expect(s.every(fn, 10)).toEqual(1);
        expect(s.every(fn, 10)).toEqual(undefined);
      });
    });
  });
});
