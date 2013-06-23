# Snowflake

Run code in particular circumstances

* By Mary Rose Cook
* http://maryrosecook.com
* maryrosecook@maryrosecook.com

## What is Snowflake?

Snowflake lets you run a piece of code once, or every so often.  It is useful for debugging a function that is run frequently.

```javascript
<script type="text/javascript" src="snowflake.js"></script>
<script type="text/javascript">
  var problemFn = function() {
    var interestingVar = 0;

    // print out interestingVar once, even though problemFn is run more than once
    snowflake.once(function() {
      console.log(interestingVar);
    });

    // print out interestingVar every two seconds
    snowflake.every(function() {
      console.log(interestingVar);
    }, 2000);

    interestingVar++;
  };

  while(true) {
    problemFn();
  };
</script>
```

## Get the code

* Development version: `coquette_root/snowflake.js`
* github: http://github.com/maryrosecook/snowflake
* `$ npm install snowflake`
