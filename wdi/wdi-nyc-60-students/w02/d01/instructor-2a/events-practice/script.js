console.log('page has loaded.');

// get a reference to the button
var $button = document.querySelector('button');
var myClicker = function(p,q,r,s,t) {
  debugger
  console.log('I\'ve been clicked');
  return "YOU DID SOMETHING WRONG HERE";
};

$button.addEventListener('click', myClicker );
