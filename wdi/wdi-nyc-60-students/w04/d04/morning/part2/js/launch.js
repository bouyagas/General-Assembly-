'use strict';
// START HERE!
console.log('Mission to Mars is a go!');

// Scroll to the bottom of the page at the start so we can go back up!!


// Define the Go! button event listener


// Define the countdown function


// Attach the click event to the Go! button


const countdown = () => {
  alert('Rocket is ready to launch!');
  let timer = 10;
  let counterDisplay = $('#count');
  counterDisplay.text(timer);
  let clearTimer = setInterval(() => {
    timer--;
    if (timer === 0) {
      clearInterval(clearTimer);
      scrollTo($('body'), 0, 5000)
    }
    counterDisplay.text(timer);
  }, 100);
}

const goButtonHandler = () => {
  let temp, fuel, pwd;
  temp = parseInt(prompt('Temperature in F'));
  fuel = parseInt(prompt('Fuel percentage'));
  pwd = prompt('Enter password');
  if (temp <= 200 && fuel > 60 && pwd === 'fizzbuzz') {
    countdown();
  }else{
    alert("We can't go to the Mars");
  }

}


$(() => {
  window.scrollBy(0, 20000);
  $('#launch').click(goButtonHandler);
});

