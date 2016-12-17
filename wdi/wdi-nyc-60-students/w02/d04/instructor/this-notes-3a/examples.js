// Jason Seminara

// 1
// What is the call-site of THIS?
function foo(a){
  console.log( this.a , a);
}
var a = 2;
foo(88); // <---call site


function setBPM(bpm){
  this.bpm = bpm;
}

function getBPM(){
  return this.bpm;
}

function Person(age, height){
  this.age = age;
  this.height = height;
  this.setBpm =
  this.getBpm = function(){ return this.bpm;}
}
