// for(var i = 0; i < 10; i ++){
// console.log("hello world");
//  }


//   var i = 0;

//   while(i < 3){
//     console.log(i);
//     i++;
//   }


// var i = 10;
//  do {
//   console.log('should this print');
// } while(i < 5);

// var colors = ['blue', 'red', 'green'];
// var colors2 = ['blue', 'red', 'green'];

//     function containsElememt(arr, target){
//       for( var i = 0; i < arr.length; i++){
//         if (arr[i] === target){
//           console.log('found it at arr ['+ i +']');
//         }else{
//           console.log('not there');
//         }
//       }
//     }


// containsElememt(colors2 , 'green');

// for loop is use to iterate over Array

// var myArray = ['tree', 'car', 'house', 'people'];

// for(var x = 0; x < myArray.length; x++){
//  console.log(myArray);
//  if(myArray[x] === 'house'){
//  console.log('I found the thing');
//  break;
//    }
//  }

var person = {
  name: 'bobby',
  age: 27,
  profession: 'developer'
}

// for in loop is use to iterate over Object
for (var key in person){
  console.log(person[key]);
}



