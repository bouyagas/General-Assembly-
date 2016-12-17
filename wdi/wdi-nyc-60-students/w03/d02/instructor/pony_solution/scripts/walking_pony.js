console.log("READY 2 ROCK");

function walkingPony(){
  var $pony = $('#pony');
  var distance = 1200;
  setInterval(function(){
    $pony.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  walkingPony();
})
