// 1.
var trevor = {};

// 2.
trevor.firstName = 'Trevor';
trevor.lastName = 'Preston';
trevor.age = 13;

// This also works:
// var trevor = {
//   firstName: 'Trevor',
//   lastName: 'Preston',
//   age: 13
// };

// 3.
trevor.hobbies = ['programming', 'writing code', 'developing web applications'];

// 4.
function printFullName(person) {
	console.log(person.firstName + ' ' + person.lastName);
}
printFullName(trevor);

// 5.
trevor.printName = function() {
	console.log(this.firstName + ' ' + this.lastName);
}
trevor.printName();

// 6.
trevor.printData = function() {
	let dataString = '';
	dataString += "Hi, I'm " + this.firstName + ' ' + this.lastName + ' and my hobbies include';
  // datastring => "Hi, I'm Trevor Preston and my hobbies include"

	for (let i = 0; i < this.hobbies.length; i++) {
		dataString += ' ' + this.hobbies[i] + ',';
    // step 1: dataString => "Hi, I'm Trevor Preston and my hobbies include programming,"
    // step 2: dataString => "Hi, I'm Trevor Preston and my hobbies include programming, writing code,"
    // step 3: dataString => "Hi, I'm Trevor Preston and my hobbies include programming, developing web applications,"

		// If you want to get fancy and write proper grammar for the last hobby
    // replace line 38 with lines 45 - 49

		// if (i === (this.hobbies.length -1)) {
		// 	dataString += ' and ' + this.hobbies[i] + '.';
		// } else {
		// 	dataString += ' ' + this.hobbies[i] + ',';
		// }
	}
	console.log(dataString);
}

// Bonus
trevor.updateData = function() {
	let updateKey = prompt("Which data set would you like to update?");
	if (this.hasOwnProperty(updateKey)) {
		let newKeyValue = prompt("What would you like to change it to?");
		alert("OK we will change " + updateKey + " from " + this[updateKey] + " to " + newKeyValue);
		this[updateKey] = newKeyValue;
		alert("The value of " + updateKey + " is now " + this[updateKey]);
	} else {
		alert("That data set does not exist");
	}
}
