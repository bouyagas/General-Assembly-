const clock = () => {
  // Write your solution here...
  const secondHand = $('#second-hand'),
        minuteHand = $('#minute-hand'),
        hourHand   = $('#hour-hand');
  let   seconds = 0,
        minutes = 0,
        hours = 0;
        
  setInterval(() => {
    seconds += 6;
    minutes += .1;
    hours += (.1 / 12);

    secondHand.css('transform', `rotate(${seconds}deg)`);
    minuteHand.css('transform', `rotate(${minutes}deg)`);
    hourHand.css('transform', `rotate(${hours}deg)`);
  }, 1000);
};

$(() => {
  console.log('Clocks.js loaded');
  clock();
});