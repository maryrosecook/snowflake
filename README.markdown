# Snowflake

Run code in particular circumstances

* By Mary Rose Cook
* http://maryrosecook.com
* maryrosecook@maryrosecook.com

## What is Snowflake?

Snowflake lets you run a piece of code once, or every so often.  It is useful for debugging a function that is run frequently.

```javascript
&lt;script type="text/javascript" src="snowflake.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
  var problemFn = function() {
    var interestingVar = 0;

    // print out interestingVar once, even though problemFn is run more than once
    s.once(function() {
      console.log(interestingVar);
    });

    // print out interestingVar every two seconds
    s.every(function() {
      console.log(interestingVar);
    }, 2000);

    interestingVar++;
  };

  while(true) {
    problemFn();
  };
&lt;script type="text/javascript"&gt;
```

## Get the code

* Development version: `coquette_root/snowflake.js`
* github: http://github.com/maryrosecook/snowflake
* `$ npm install snowflake`
