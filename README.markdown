#Snowflake.js
Run code in beautiful and unique situations

By mary rose cook

* http://maryrosecook.com
* maryrosecook@maryrosecook.com

##What is Snowflake.js?

Snowflake lets you run a piece of code once, or every so often.  It is useful for debugging a function that is run frequently.

<pre><code>var s = new Snowflake();
var problemFunc = function() {
  var interestingVar = 0;

  // print out interestingVar once, even if problemFunc is run more than once
  s.once(function() {
    console.log(interestingVar);
  });

  // print out interestingVar every two seconds
  s.every(function() {
    console.log(interestingVar);
  }, 2000);
}
</code></pre>

##Licence

The code is open source, under the MIT licence.

##Getting started

* Download the repository from http://github.com/maryrosecook/snowflakejs

* Import snowflake.js into your code.

* Instantiate and use Snowflake as in the code sample above.

* See index.html for details of once(), every(), stuck() and change().
