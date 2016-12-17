
// w05-d02 Morning exercise

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
}

// // 1.1
// frameworks.frontEnd.forEach((framework) => {
//   let newSentence = framework.name + ' is ' + framework.description;
//   console.log(newSentence);
// })


// // 1.2
// const randomNumbers = [3,5,2,8,1];
// let total = 0;
// randomNumbers.forEach((number) => {
//   total += number;
// });
// console.log(total);


// // 2.1
// let modifiedFrontEnd = frameworks.frontEnd.map((framework) => {
//   return framework.name + '.js';
// });
// console.log(modifiedFrontEnd);


// // 2.2
// let modifiedBackEnd = frameworks.backEnd.map((framework) => {
//   return framework.name + '.js';
// });
// console.log(modifiedBackEnd);


// 3.1
let filteredFrontEnd = frameworks.frontEnd.filter((framework) => {
  if (framework.description.length > 30) {
    return framework;
  }
});
console.log(filteredFrontEnd);

let filteredByState = sightings.filter((stateSightings) = >{
  if(stateSightings.state === req.query.state){
    return stateSightings
  }
}


// // 3.2
// let filteredBackEnd = frameworks.backEnd.filter((framework) => {
//   if (framework.description.length > 30) {
//     return framework;
//   }
// })
// console.log(filteredBackEnd);


// // 4.1
// let frontEndNames = frameworks.frontEnd.reduce((sum, framework) => {
//   return sum += framework.name;
// },'');
// console.log(frontEndNames);
