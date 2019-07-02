
/*
Var: these variables can be reassigned and updated
Var: How are they scoped? THEY ARE function scope,
they are only available in the function they are created.
If they are not created in a function, they are global scoped.

Let and const


*/
  // function setWidth() {

  //   // Width is defined here.
  //   var width = 100;
  //   console.log(width);
  // }
  // setWidth();
/*
Below will not work, because width is scoped to the function above.
They are function scoped.
*/
// console.log(width);

/* Where is function scoping a problem?
What if there is no function?
Then, you can use LET or CONST
*/
  // var age = 100;
  // if(age > 12) {

  //   // dogYears is now scoped to this block; it will not leak out
  //   const dogYears = age * 7;
  //   console.log(`You are ${dogYears} dog years old!`);
  // }

  // let height = 200;
  // const key = 'abc123';

/*
From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types

Variables can be declared in 2 ways:
with VAR, either local or global
with LET or CONST

A variable with no value is UNDEFINED, and attempts to access it will
result in ReferenceError

*/
// var a;

// console.log('The value of a is ' + a);

/*
Undefined will evaluate to:
Boolean: False
Number: NaN

If evluating to null,
Boolean: False,
Number: 0
*/

/*
Variables declared outside a function can be accessed in the function
If the variable name is used twice, like below, it will be UNDEFINED
*/
var newVar = 'this is my birthday';

(function() {
  console.log(newVar);
  var newVar = 'this is not my birthday';

})();

