console.log('starter2.js linked');


//code goes here
var counter = 0;
var $allZones = document.querySelectorAll('.zone');
var zoneArray = ['zone-4', 'zone-2', 'zone-1', 'zone-3'];

function initialize() {
  for (var i = 0; i < $allZones.length; i++) {
    $allZones[i].addEventListener('mouseover', confirmZone);
    $allZones[i].addEventListener('mouseout', clearZone);
    $allZones[i].addEventListener('click', saveZone);
  }
}

function confirmZone(event) {
  if (event.target.id === zoneArray[counter]) {
    event.target.style.backgroundColor = 'green';
  } else {
    event.target.style.backgroundColor = 'red';
  }
}

function clearZone(event) {
  event.target.style.backgroundColor = 'white';
}

function saveZone(event) {
  if (event.target.id === zoneArray[counter]) {
    event.target.removeEventListener('mouseout', clearZone);
    event.target.removeEventListener('mouseover', confirmZone);
    counter++;
    if(counter === 4) {
      console.log('YOU WIN');
    }
  }
}

initialize();
