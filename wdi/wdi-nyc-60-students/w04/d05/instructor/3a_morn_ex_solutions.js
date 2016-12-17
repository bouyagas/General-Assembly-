

//Matt K Solution

// function factor(counter) {
//  let old = 1;
//  for (let i = 1; i <= counter; i++) {
//    old = (i * old);
//  }
//  console.log(old);
// }
// factor(5);

//Kieran

// function factorial(n){
//  for (let i = n -1; i > 0; i--) {
//    n = n*i;
//    console.log(n);
//  }
// }

// factorial(5);

//Joey
// function factorial(n) {
//  if (n === 1) {return n};
//  return (factorial(n-1)*n);
// }

// console.log(factorial(5));

/*Part 2*/

//Bill
// function fizz(num) {
//  let theSum = 0;
//  for (let i = 0; i < num; i++) {
//    if (i % 3 === 0 || i % 5 === 0) {
//      theSum = theSum + i;
//    }
//  }
//  console.log(theSum);
// }

// fizz(10)

//Krystyna
// let multiples = num => {
//   const array = [];
//   for (let i = 0; i < num; i++) {
//     if ( i % 3 === 0 || i % 5 === 0) {
//       array.push(i);
//     }
//   }
//   let sum = null;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum)
// }

// multiples(10)


/*Bonus*/
//Dan

function sumOfSquare(i) {
    if (i === 1) {
        return i;
    } else {
        return (Math.pow(i,2)) + sumOfSquare(i-1);
    }
}

function sum(n) {
    if (n === 0) {
        return n;
    } else {
        return sum(n-1) + n;
    }
}

function bonus(q) {
    console.log( Math.pow(sum(q),2) - sumOfSquare(q));
}

bonus(100);
