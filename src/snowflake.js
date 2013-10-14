;(function(exports) {
  var actions = {};

  exports.snowflake = {
    // runs the passed action once
    once: function(action) {
      var id = makeId(action);
      if(actions[id] === undefined) {
        actions[id] = "whatever";
        return run(action);
      }
    },

    // runs action every interval seconds
    every: function(action, interval) {
      var id = makeId(action);
      if(actions[id] === undefined) {
        actions[id] = {
          nextRun: calculateNextRun(interval)
        };
      } else if(actions[id].nextRun < new Date().getTime()) {
        actions[id].nextRun = calculateNextRun(interval);
        return run(action);
      }
    },

    reset: function() {
      actions = {};
    }
  };

  // taken from: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  var hashString = function(str) {
    var hash = 0;
	  if(str.length === 0) {
      return hash;
    }

	  for (i = 0; i < str.length; i++) {
	    var char = str.charCodeAt(i);
	    var hash = ((hash << 5) -hash ) + char;
	    hash = hash & hash;
	  }

	  return hash;
  };

  // takes function, stringifies it and turns it into a hash to create an identifier
  var makeId = function(action) {
    return hashString(action.toString());
  };

  var run = function(action) {
    // maybe if action is not function then just console.log
    return action();
  };

  var calculateNextRun = function(interval) {
    return new Date().getTime() + interval;
  };
})(this);
