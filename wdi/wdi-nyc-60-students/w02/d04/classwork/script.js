console.log('connected !');

$(document).ready(function() {
   setBackground('pink');
   clickHandler();
});

function setBackground(color) {
   document.body.style.backgroundColor = color;
}

// modern code
  function clickHandler() {
  $('input').on('click' , function() {
    $('body').css('background-color', 'purple');
  })
}


  //classic code
// function clickHandler() {
//  $('input').click(function() {
//   $('body').css('backgound-color', 'red');
//  });
// }
