const clock = () => {
  // Write your solution here...
  const secondHand = document.querySelector('#second-hand'),
        minuteHand = document.querySelector('#minute-hand'),
        hourHand   = document.querySelector('#hour-hand');
  let   seconds = 0,
        minutes = 0,
        hours = 0;

  setInterval(() => {
    seconds += 6;
    minutes += .1;
    hours += .008333333333;

    secondHand.style.transform = `rotate(${seconds}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
  }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clock.js loaded');
  clock();
});