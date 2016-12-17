// FOR LOOPS

for( var i = 155 /* initialization */;
      i <= 200    /* condition */;
      i++ /*increment or decrement*/  ) {

        console.log("iteration #" + i);
}

for (var i = 100; i >= 0 ; i--) {
  console.log("iteration #" + i);
}



// I need a loop in order to create 9 LIs
for (var i = 1; i <= 100; i++) {
  // create a new LI Element
  var li = document.createElement('LI');

  // GET  a hold of the UL
  var ul = document.querySelector('ul');

  // I am going to add the index number as the content of my LI
  li.innerHTML = i;

  // Styles LI
  if (i % 2 === 0) {
    li.style.fontSize = '.5em';
  }else {
    li.style.fontSize = '2em';
  }

  // Fizz Buzz
  if ( i % 3 === 0 && i % 5 === 0 ){
    li.innerHTML += " FizzBuzz";
  }else if ( i % 5 === 0) {
    li.innerHTML += " Buzz";
  }else if ( i % 3 === 0){
    li.innerHTML += ' Fizz';
  }
  // Alternative FizzBuzz
  // if ( i % 3 === 0) {
  //   li.innerHTML += " Fizz";
  // }
  // if ( i % 5 === 0){
  //   li.innerHTML += ' Buzz';
  // }

  // Append the LI to the UL
  ul.appendChild(li);

}



// You do (15m) go to pinterest.com. PAIR PROG.
/*

- Select all the images in the site and replace
them with an image URL of your choice. (PG-13 please)

- Go to theonion.com and change the
contents of all headers to "<h2>I love <whatever you want here></h2>"

*/

// select all of my images in the site
// var images = document.querySelectorAll('img');
// var bombUrl = 'https://media1.giphy.com/media/4ANvpVwGGWfrG/200w.gif';
//
// for (var i = 0; i < images.length; i++) {
//   images[i].setAttribute('src', bombUrl);
// }


// for in

var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: ["purple", "greeen", "light pink salmon"]
};

for ( var nameKey in colors ) {
  if ( colors[nameKey] === "pink" || colors[nameKey] === "purple" ){
    console.log(nameKey);
  }
}




// generate deck of card with for and for-in loops

function genDeck(){
  var faceCards = ['J', 'Q', 'K'];
  var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
  var deck = [];

  for (var suitIdx in suits){

    var card = 'A of ' + suits[suitIdx];
    deck.push(card);

    for (var i = 2; i <= 10; i++) {
      var card = i + ' of ' + suits[suitIdx];
      deck.push(card);
    }

    for (var faceIdx in faceCards){
      var card = faceCards[faceIdx] + ' of ' + suits[suitIdx];
      deck.push(card);
    }

  }

  return deck;
}
