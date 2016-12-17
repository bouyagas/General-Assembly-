# Object Oriented JS and the Deathly Hallows
![](http://i.giphy.com/rdGJSX27tR0YM.gif)
## Morning Exercise
#### Once you master bind, call, and apply, you also will have no master!

## Setup
You will be doing your work in the provided script.js file. Focus on `bind` first, but try to complete all problems.

## Assignment
Today we will be looking at 3 new methods in Javascript - `bind`, `call`, and `apply`. Not only are these the Deathly Hallows of JS, they are very useful methods for object oriented programming, and are often the subject of job interview questions! We will see these again, but let's take a first stab at this stuff.

You can find documentation here:
 - [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
 - [Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
 - [Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


### 1.0 bind()

Given the following objects:
```
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

console.log(goldenSnitch.capture);
goldenSnitch.logEscape();

console.log(harryPotter.escape)
harryPotter.logEscape();
var sayHarryEscape = goldenSnitch.logEscape.bind(harryPotter)
sayHarryEscape();
```

Take a look at this code before running it or trying it out. What do you expect each line code to output?

What is the actual output? `Hint` - it's not YOUR fault if `harryPotter.logEscape()` is undefined.
What happens when we call bind? What is bind doing here?

Write out your answer in plain English.

### 1.2 More Bind!
Given the following objects:
```
var draco = {
  name: "Draco Malfoy",
  house: "Slytherin",
  hasHenchmen: true,
  logYelling: function() {
    if (this.hasHenchmen === true) {
      console.log("Potter! Is it true you fainted? I mean, you actually fainted? ");
    } else if (this.hasHenchmen === false) {
      console.log("Shove off Malfoy!")
    }
  }
}

var ron = {
  name: "Ron Weasley",
  house: "Gryffindor",
  hasHenchmen: false
}

draco.logYelling();
ron.logYelling();
```
Take a look at this code before running it or trying it out. What do you expect each line code to output?

What is the actual output? `Hint` - it's not YOUR fault if `ron.logYelling()` is undefined.

How can we use `.bind()` to make Ron yell "Shove off Malfoy!"?

Explain how you got bind to work, in English, and write out the code you used to make it happen.

## 1.7 bind is rad
 Given the following objects:
 ```
 var dumbledore = {
   name: "Albus Dumbledore",
   prefix: "Professor",
   quote: "In dreams we enter a world that's entirely our own."
 }

 var snape = {
   name: "Serveus Snape",
   prefix: "Professor",
   quote: "Mr Potter.Our.New.Celebrity",
   sayQuote: function() {
     console.log(this.quote);
   }.bind(dumbledore)
 }

 snape.sayQuote();
```
Take a look at this code before running it or trying it out. What do you expect each line code to output?

What is the actual output?

How is `bind` working in this example? Comment an answer in plain English.

## 1.9 Last one with bind!
Given the following code:

```
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
  hagrid.sayQuote
)

```

This code is already provided in button.js, and you can test it out in the browser.

Take a look at this code before running it or trying it out. What do you expect the code to output when the button is clicked?

What is the actual output? `Hint` - checkout what the value of `this` is in the event listener

How can we use `.bind()` to make the console print "You're a wizard, Harry"? How about to print Longbottom's quote?

Explain how you got bind to work, in English, and write out the code you used to make it happen.

## 2.0 Call!
Given the following code:
```
var hagrid = {
  name: "Rubeus Hagrid"
}

var longbottom = {
  name: "Neville Longbottom"
}

var say = function(quote){
  console.log(quote + ", " + this.name);
}

say.call(hagrid, "Your a wizard, Harry!")

say.call(longbottom,
  "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... "
)
```
Take a look at this code before running it or trying it out. What do you expect each line code to output?

What is the actual output?

How is `call` working in this example? Explain in English.

## 3.0 Apply!
Given the following code:
```
var hagrid = {
  name: "Rubeus Hagrid"
}

var snape = {
  name: "Serveus Snape"
}

var say = function(quote){
  console.log(quote + "," + this.name);
}

var update = function(job, teaches, quote){
  this.job = job,
  this.teaches = teaches,
  this.quote = quote
}

var logMore = function(person, method, args){
  method.apply(person, args)
}

logMore(hagrid, say, ["Yo I'm "])
logMore(snape, say, ["I am ...................................................................."])

logMore(hagrid, update, ["Keeper of Keys and Grounds", "Care of Magical Creatures", "What's comin' will come and we'll meet it when it does."])

logMore(snape, update , ["Professor at Hogwarts", "Defence Against the Dark Arts", "Turn to page 394."])

console.log(hagrid)
console.log(snape)

```
Take a look at this code before running it or trying it out. What do you expect this code to output?

What is the actual output?

How is `apply` working in this example? What is the difference between call and apply? Explain in English.
