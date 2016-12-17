// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some Googling to figure this out if you forget how conditionals work.

/*Eric*/
//var number1 = 4
//var number2 = 5

function maxOfTwoNumbers (number1, number2) {
  return Math.max(number1, number2);
}

console.log(maxOfTwoNumbers(4,5));

//imani
var imaniMaxOfTwoNumbers = function (a, b) {
  if (a>b) {
    return a;
  } else {
   return b;
  }
};

