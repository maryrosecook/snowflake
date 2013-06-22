var Snowflake = require('./snowflake').Snowflake;

describe('snowflake', function() {
  var s, run, fn;
  beforeEach(function() {
    s = new Snowflake();
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
        expect(s.every(10, fn));
      });
      waits(15);
      runs(function() {
        expect(s.every(10, fn));
        expect(run).toEqual(1);
      });
      waits(15);
      runs(function() {
        expect(s.every(10, fn));
        expect(run).toEqual(2);
      });
    });

    it('should return return value only when run', function() {
      runs(function() {
        expect(s.every(10, fn));
      });
      waits(15);
      runs(function() {
        expect(s.every(10, fn)).toEqual(1);
        expect(s.every(10, fn)).toEqual(undefined);
      });
    });
  });
});
