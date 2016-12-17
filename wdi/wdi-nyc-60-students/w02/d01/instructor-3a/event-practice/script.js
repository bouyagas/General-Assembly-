console.log('Loaded!');

// stored a reference to the DOM (note the $)
var $button = document.querySelector('button');

// created a function to be called when the event occurs
function handleMyClicks() {
  console.log('I was clicked!');
}

// set up an event handler to listen for clicks
// which will fire the function when the click event occurs
$button.addEventListener('click', handleMyClicks);
