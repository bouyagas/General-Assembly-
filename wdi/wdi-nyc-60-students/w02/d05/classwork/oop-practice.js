'use strict';

function Mammal() {
  this.isWarmBlooded=true;
  this.legCount=4;
  this.milk=0;
}

Mammal.prototype.lactate = function() {
  this.milk--
};

function Dog(name)  {
  this.speak = 'Bark!';
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

const fido = new Dog('Fido');


//////////////
// es6 / es2015
//////

class Mammal {
  constructor() {
    this.isWarmBlooded=true;
    this.legCount=4;
    this.milk=0;
  }

  lactate() {
    this.milk--;
  }

  speak() {
    throw 'method not implemented';
  }

}

class Dog extends Mammal {
  speak() {
    return 'Bark!!';
  }

}

class Cat extends Mammal {
  speak()  {
    return 'Meow!!';
  }
}

class Poodle extends Dog {
  speak()  {
    return 'Yip';
  }
}

class Lion extends Cat {
  speak()  {
    return 'ROAR!!';
  }
}
