
//1
var trevor ={}

//2
trevor.firstName = 'Trevor';
trevor.lastName = 'Preston';
trevor.age = 13;

//3
trevor.hobbies = ['programming', 'writing code', 'developing web applications'];


//4
function printNames(person){
  console.log(person.firstName + ' ' + person.lastName);
}

printNames(trevor)

//5
trevor.printName = function() {
 console.log(this.firstName, this.lastName);
}

//6
krystyna.printData = function printItAll(person) {
 var hobs = null;
 for (var i = 0; i < this.hobbies.length; i++) {
   var data = this.hobbies[i];
   hobs += ", " + data;
 }
 return "Hi, I'm " + this.fullName() + " and my hobbies include " + hobs
}


//Matt
matt.printData = function (){
for(var i = 0; i < this.hobbies.length; i++){
  this.hobbies.join(',');
}
 return 'Hi, I\'m ' + matt.firstName + ' and my hobbies include ' + this.hobbies;
}












