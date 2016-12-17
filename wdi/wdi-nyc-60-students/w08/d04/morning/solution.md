Many of the questions and solutions come from here:

[JavaScript Interview Questions](https://www.toptal.com/javascript/interview-questions)

1. Most developers incorrectly understand the statement `var a = b = 3;` to be shorthand for:

  ```javascript
  var b = 3;
  var a = b;
  ```

  But in fact, var a = b = 3; is actually shorthand for:

  ```javascript
  b = 3;
  var a = b;
  ```
  If you are not using strict mode, b = 3 would assign the value 3 to a global scope `b`

2. Not only is this surprising, but what makes this particularly gnarly is that foo2() returns undefined without any error being thrown.

  The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form). As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.

3. Let’s first explain the parts of this that are presumably more obvious:

  1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay
  2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.
  OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being logged right away? And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later line of code?

  The answer has to do with properly understanding JavaScript events and timing.

  The browser has an event loop which checks the event queue and processes pending events. For example, if an event happens in the background (e.g., a script onload event) while the browser is busy (e.g., processing an onclick), the event gets appended to the queue. When the onclick handler is complete, the queue is checked and the event is then handled (e.g., the onload script is executed).

4. In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

6. The output of this code will be 456 (not 123).

  The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].