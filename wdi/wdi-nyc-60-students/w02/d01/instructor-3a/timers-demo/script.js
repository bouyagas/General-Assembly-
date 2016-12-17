// grab a ref to the buttons
var $startBtn = document.getElementById('start');
var $stopBtn = document.querySelector('#stop');

// create a variable taht will store the timer
var songTimer;

// create a callback to do the thing
var singAnnoyingSong = function() {
  console.log('I know a song that gets on everyone\'s nerves...');
};

function startTimer(event) {

  if (songTimer) {
    return;
  }
  songTimer = setInterval(singAnnoyingSong, 100);
  console.log("timer started!");
}

function stopTimer(event) {
  console.log('timer stopped!');
  clearInterval(songTimer);
  songTimer = null;
}


// Create an event listener to print lots of things
$startBtn.addEventListener('click', startTimer)

// clear the event listener
$stopBtn.addEventListener('click', function() {
  clearInterval(songTimer);
  songTimer = null;
})


document.addEventListener('keydown', function(event){
  var keyName = event.key;
debugger;
  console.log('key press detected!', keyName);
  // 'a' key is start
  switch(keyName){
    case 'a':
      console.log(keyName, "pressed, but I'm doing nothing")
      break;

    case 'z':
      startTimer(event);
      break;

    case 'l':
    case 'm':
      stopTimer(event);
      break;

    default:
      console.log(keyName, "DEFAULT: pressed, but I'm doing nothing")
      break;
  }
})

