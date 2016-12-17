const clock = () => {
  const minuteHand = document.querySelector('#minute-hand');
  const secondHand = document.querySelector('#second-hand');
  const hourdHand = document.querySelector('#hour-hand');
  let secondInt = 0;
  let minuteInt = 0;
  let hourInt = 0;
  setInterval( () =>{
   console.log('time passing');
   secondInt += 6;
   minuteInt += .1
   hourInt += .1 / 12;
   secondHand.style.transform  = `rotate(${secondInt}deg)`
   minuteHand.style.transform = `rotate(${minuteInt}deg)`
   hourdHand.style.transform = `rotate(${hourInt}deg)`
  }, 1000)
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clocks loaded');
  clock();
});