console.log('loaded!');

var $button = document.querySelector('button');
$button.addEventListener('click', handleMyClicks());

function handleMyClicks() {
  console.log('I was click!');
}








global array to hold all zone divs
var $zones = document.querySelectorAll('.zone');
// loop through all zones and add event listeners
for (var i = 0; i < $zones.length; i++) {
  $zones[i].addEventListener('mouseover', setBackgroundToGreen);
  $zones[i].addEventListener('mouseout', setBackgroundToWhite);
  $zones[i].addEventListener('click', permanentlySetBackground);
}

// simply sets the background to green
function setBackgroundToGreen(e) {
  e.target.style.backgroundColor = 'green';
}

// ditto, but for white
function setBackgroundToWhite(e) {
  e.target.style.backgroundColor = 'white';
}

// removes all event listeners except for click; then sets the background to green
// and calls checkIfAllAreClicked, which checks if all zones were clicked
function permanentlySetBackground(e) {
  e.target.removeEventListener('mouseover', setBackgroundToGreen);
  e.target.removeEventListener('mouseout', setBackgroundToWhite);
  e.target.style.backgroundColor = 'green';
  checkIfAllAreClicked();
}

// loops through the zones to check if the backgrounds are green. runs every time a
// zone is clicked by that zone's click event listener. if all are clicked, the function
// display some finish messages and exits
function checkIfAllAreClicked() {
  var count = 0;
  for (var i = 0; i < $zones.length; i++) {
    if ($zones[i].style.backgroundColor == 'green'){
      count++;
    }
  }
  // if the number of zones that are green is equal to the number of zones on the page
  if (count == $zones.length) {
    var $reloadButton = document.querySelector('#reload-button');
    $reloadButton.style.display = 'block'; // show a button that reloads the page for easier testing
    var $resultElement = document.querySelector('#result-text');
    $resultElement.innerHTML = 'Congratulations! You win! :)'; // display this on the page
    console.log('Congratulations! You win! :)');
  }
}

// This is to show game status on the screen as opposed to the console:
var $body = document.querySelector('body');
var $resultElement = document.createElement('p');
$resultElement.setAttribute('id', 'result-text');
$resultElement.innerHTML = 'Keep Trying!';
$resultElement.style.textAlign = 'center';
$body.appendChild($resultElement);

// The following I did just to facilitate resetting the page for testing
var $reloadButton = document.createElement('button');
$reloadButton.setAttribute('id', 'reload-button');
$reloadButton.innerHTML = 'Click here to reload the page';
$reloadButton.style.display = 'none';
$reloadButton.style.margin = '0 auto';
$reloadButton.addEventListener('click', reloadPage);
$body.appendChild($reloadButton);

// found this on google - simply tells the browser to reload
function reloadPage () {
  window.location.reload();
}
