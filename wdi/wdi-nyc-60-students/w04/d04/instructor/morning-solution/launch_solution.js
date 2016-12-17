// START HERE!
console.log('Mission to Mars is a go!')

// add double check function to button in HTML
const buttonClickHandler = () => {
  // Define a click handler for #launch
  $('#launch').click(() => {
    // Prompt user for inputs for temperature, fuel, and password
    let temp = parseInt(prompt("This is mission control. Please report the current temperature in fahrenheit!"));
    let fuel = parseInt(prompt("Please report the fuel percentage!"));
    let password = prompt("Please report the password!");

    // Check if temp is less than or equal to 200, fuel is greater than 60, and password is 'fizzbuzz'
    if (temp <= 200 && fuel > 60 && password === "fizzbuzz") {
      // Alert message and call countdown()
      alert("Houston is ready for takeoff! Start the countdown!!");
      countdown();
    }
  });
};

// countdown function
const countdown = () => {
  let timer = 10;
  let $counterDisplay = $('#count');
  let $body = $('body');
  // Set counterDisplay to show current timer value
  $counterDisplay.text(timer);

  // Define an interval and set a variable for clearing it
  let clearTimer = setInterval(() => {
    // If timer has reached 0, erase the timer display, clear the interval, and scroll the body
    // to the top of the page
    // If timer is not 0 yet, decrement the timer by 1 and update the counter display
    if (timer === 0) {
      $counterDisplay.text('');
      clearInterval(clearTimer);
      scrollTo($body, 0, 10000);
    } else {
      timer--;
      $counterDisplay.text(timer);
    }
  }, 1000);
};


// jQuery Window onload function
$(() => {
  // Scroll to the bottom of the page at the start so we can go back up!!
  window.scrollBy(0, 20000);

  // Attach the click event to the Go! button
  buttonClickHandler();
});
