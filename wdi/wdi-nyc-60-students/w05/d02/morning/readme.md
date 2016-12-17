![JS Basics](https://i.giphy.com/s0z685OFhWyuk.gif)

# Morning Exercise - Iterators
At this point we should be very comfortable with constructing a `for loop` to iterate through an `array` to perform various operations on that array. We've seen .forEach() and hinted at a few other array methods, but today we'll be getting some practice time with ForEach, Map, Filter, and Reduce. These are array methods with specific purposes that will make your life much easier once you get the hang of them.

### Topics - Array Methods
- `.forEach()`
- `.map()`
- `.filter()`
- `.reduce()`

### Resources
 - [ForEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 - [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 - [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 - [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Setup
`script.js` has already been provided for you. Put your answers in this file. You can either test your methods in the terminal with Node, or in the Chrome Dev Tools.

You will be working with the following JSON Object:

```javascript

var frameworks = {
  "frontEnd": [
    {
      "name": "React",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces."  
    },
    {
      "name": "Angular",
      "description": "HTML enhanced for web apps"
    },
    {
      "name": "Backbone",
      "description": "Give your JS App some Backbone with Models, Views, Collections, and Events"
    }
  ], // ends frontEnd array
  "backEnd": [
    {
      "name": "Express",
      "description": "A minimalist framework for building a host of web and mobile applications as well as application programming interfaces (APIs)"
    },
    {
      "name": "Meteor",
      "description": "An open-source, model-view controller (MVC) framework for building websites and web/mobile applications."
    },
    {
      "name": "Sails",
      "description": "Sails.js offers a model-view controller (MVC) pattern for implementing data-driven application programming interfaces (APIs)."
    }
  ] // ends backendArray
} // ends data json object
```

### Part 1 - .forEach()
ForEach is the most common built-in method used for iterating through an array. It follows a pretty straightforward pattern.

Example:
```javascript
var instructors = ["Bobby", "Irwin", "Jason", "Rafa", "Trevor"];
instructors.forEach(function(instructor) {
  console.log(instructor);
});
```

In this example, our array is `instructors` which contains your five lovely WDI instructors. .forEach() is a method we can call on an array that takes a function as an argument which should perform some operation with each element in the array. The first argument passed in this callback function represents each individual element within the array as you iterate through. We can name this argument whatever we want, but it's a good convention to use the singular form of the array name. The above example performs the same exact operation as the following example performed with a traditional for loop.

```javascript
var instructors = ["Bobby", "Irwin", "Jason", "Rafa", "Trevor"];
for (var i = 0; i < instructors.length; i++) {
  console.log(instructors[i]);
}
```

1. Given the above `frameworks` JSON object, write a statement using .forEach() to console.log the name and description of each frontend framework. The first element should log:

  > "React is A declarative, efficient, and flexible JavaScript library for building user interfaces."

2. Given an array of
```js
[3, 5, 2, 8, 1]
```
Write a .forEach() statement to calculate the sum of the numbers within the array.


### Part 2 - .map()
The `map` method will also take an array and iterate through it with a callback function, but instead it will return a new, modified version of the original array.

Example:
``` js
var backendTech = ["Node", "Express", "Handlebars"];
var modifiedTech = backendTech.map(function(tool){
  return tool + "!";
});

console.log(modifiedTech);
  => ["Node!", "Express!", "Handlebars!"]
```


1. Again using the `frameworks` JSON object above, let's grab the `frontEnd` array from the `frameworks` JSON object and use `map()` to return a new array. This array should be modified so that each framework's `name` will end in '.js'.
 - Save this array into a variable called 'modifiedFrontEnd' and print it to the console.

2. Do the same thing to the `backEnd` array. Use `map()` to return a new array so each framework's name ends in '.js'.
 - Save this array to a variable called 'modifiedBackEnd' and print it to the console.

### Part 3 - .filter()
`filter()` takes an array and returns a new array of the elements that pass a boolean test.

Example:
``` js
var animals = [
  {
    "name": "Fluffykins",
    "species": "cat"
  },
  {
    "name": "Hamilton",
    "species": "dog"
  },
  {
    "name": "Shadow",
    "species": "dog"
  },
  {
    "name": "Sassy",
    "species": "cat"
  }
];

var dogs = animals.filter(function(animal){
  if (animal.species === "dog") {
    return animal;
  }
});

console.log(dogs);
  => [
       {
          "name": "Hamilton",
          "species": "dog"
        },
        {
          "name": "Shadow",
          "species": "dog"
        }
      ]
```

1. Going back to our frameworks JSON object, let's use `.filter()` to create a new array out of the `frontEnd` array. This new array should contain every object whose description is more than 30 characters long.
 - store this new array as 'filteredFrontEnd' and print it to the console.

2. Once more, with `.filter()` let's make a new array from the `backEnd` array in our `frameworks` JSON file. This array should contain every backEnd framework whose `name` begins with a vowel.
  - store this new array as 'filteredBackEnd' and print it to the console

### Part 4 - .reduce()
`reduce` is a kind of Swiss Army Knife for arrays. One of it's best uses is adding up elements. It takes a callback function with two arguments, the first we can call `sum`. We can add each item of the array to the sum. The second argument is current, which is each element in the array as we iterate through it.

Example:
```js
var numbers = [0, 1, 2, 3];
var total = numbers.reduce(function(sum, current) {
  return sum += current;
});

console.log(total);
  => 6
```

1. Using `reduce()`, let's iterate over the `frontEnd` array in our `frameworks` JSON object and concatenate all the names together in a single string.
 - save this string in a variable called "frontEndNames" and print it to the console.
