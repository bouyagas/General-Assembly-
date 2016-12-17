// get a ref to the button

var $startBtn = document.getElementById('startBtn');
var $stopBtn = document.querySelector('#stopBtn');

var singAnnoyingSong = function() {
  console.log('This song is annoying');
  return;
};

var songTimer;
var startTimer = function(event) {
  if (songTimer) {
    return;
  }
  songTimer = setInterval(singAnnoyingSong, 100);
    console.log('start Timer');
}

var stopTimer = function(event) {
  clearInterval(songTimer);
  songTimer = null;
  console.log('stop Timer');
}


$startBtn.addEventListener('click', startTimer);
$stopBtn.addEventListener('click', stopTimer);

// we want to listen for key events
document.addEventListener('keydown', function(event) {
  var keyName = event.key;
  debugger

  switch(keyName) {
    case 'a':
    case 'k':
      startTimer();
      break;

    case 'z':
    case 'm':
      stopTimer();
      break;

    default:
      console.log('another key has been pressed!', keyName);
      break;
  }

})





console.log('i\'ve been loaded');
