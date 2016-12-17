// Create JS Object

var profile = {
  "name": "rafa",
  key: "value",
  dreams: {
    learn: ["objects", "functions"],
    good: "puppies"
  }
};


//  Access data

var name = person.name;
var learning = person.dreams.learn;
var firstLearningThingy = person.dreams.learn[0];


// Change the data

person.name = "Roid";
person.dreams = ["gains", "staycations", "working in", "cat fishing"]
person.dreams.push("job change");
person.dob = "1986";



// console.log(person);






//1


	document.querySelector('body')
  .addEventListener('click', function() {

    // What do I want to happen?

    //  I want to target the body
    var body = document.querySelector('body');


    // I want to rotate it a random amount of degrees
    var randomNum = Math.floor(Math.random()*360);

    body.style.transform = 'rotateZ('+randomNum+')';



      // document.querySelector('body').style.transform = "rotateZ(" +
      //   (Math.floor(Math.random() * 360)+1) + "deg)";
    });

    // 2




    document.querySelector('body').addEventListener('click', function() {
      p = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2014/10/womp-womp.mp3?_=1');
      p.play();
    });







// Event object


document.querySelector('.box').addEventListener('click',
function(report) {

  // This should be refactored to a function
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);


  report.target.style.backgroundColor = 'rgb(' + red + ', '+ green + ', ' + blue + ')';
})
