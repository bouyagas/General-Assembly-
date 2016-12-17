
// 1.0
var goldenSnitch = {
  escape: "See ya!",
  capture: "150 points to Gryffindor!",
  logEscape: function() {
    console.log(this.escape);
  }
}

var harryPotter = {
  position: "Seeker",
  broomStick: "Nimbus 2000",
  escape: "Only with the help of friends"
}

// console.log(goldenSnitch.capture);
// goldenSnitch.logEscape();

// console.log(harryPotter.escape)
// harryPotter.logEscape();
// var sayHarryEscape = goldenSnitch.logEscape.bind(harryPotter)
// sayHarryEscape();

// answer


// 1.2
// var draco = {
//   name: "Draco Malfoy",
//   house: "Slytherin",
//   hasHenchmen: true,
//   logYelling: function() {
//     if (this.hasHenchmen === true) {
//       console.log("Potter! Is it true you fainted? I mean, you actually fainted? ");
//     } else if (this.hasHenchmen === false) {
//       console.log("Shove off Malfoy!")
//     } else {
//     	console.log('this broke')
//     }
//   }
// }

// var ron = {
//   name: "Ron Weasley",
//   house: "Gryffindor",
//   hasHenchmen: false
// }

// draco.logYelling();
// ron.logYelling();

// answer

// 1.7
// var dumbledore = {
//   name: "Albus Dumbledore",
//   prefix: "Professor",
//   quote: "In dreams we enter a world that's entirely our own."
// }

// var snape = {
//   name: "Serveus Snape",
//   prefix: "Professor",
//   quote: "Mr Potter.Our.New.Celebrity",
//   sayQuote: function() {
//     console.log(this.quote);
//   }.bind(dumbledore)
// }

// snape.sayQuote();

// // answer
//
//
// 1.9
var hagrid = {
  name: "Rubeus Hagrid",
  quote: "Your a wizard, Harry!",
  sayQuote: function() {
    console.log(this.quote)
  }
}

var longbottom = {
  name: "Neville Longbottom",
  quote: "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... ",
  sayQuote: function() {
    console.log(this.quote)
  }
}


var button = document.getElementById('sorcerersButton');

button.addEventListener(
  "click",
  hagrid.sayQuote.bind(hagrid)
)

// answer


// // 2.0
// var hagrid = {
//   name: "Rubeus Hagrid"
// }
//
// var longbottom = {
//   name: "Neville Longbottom"
// }
//
// var say = function(quote){
//   console.log(quote + ", said " + this.name);
// }
//
// say.call(hagrid, "You're a wizard, Harry!")
//
// say.call(longbottom,
//   "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... "
// )
//
// // answer


// // 3.0
// var hagrid = {
//   name: "Rubeus Hagrid"
// }
//
// var snape = {
//   name: "Serveus Snape"
// }
//
// var say = function(quote){
//   console.log(quote + "," + this.name);
// }
//
// var update = function(job, teaches, quote){
//   this.job = job,
//   this.teaches = teaches,
//   this.quote = quote
// }
//
// var logMore = function(person, method, args){
//   method.apply(person, args)
// }
//
// logMore(hagrid, say, ["Yo I'm "])
// logMore(snape, say, ["I am ...................................................................."])
//
// logMore(hagrid, update, ["Keeper of Keys and Grounds", "Care of Magical Creatures", "What's comin' will come and we'll meet it when it does."])
//
// logMore(snape, update , ["Professor at Hogwarts", "Defence Against the Dark Arts", "Turn to page 394."])
//
// console.log(hagrid)
// console.log(snape)
//
// // answer