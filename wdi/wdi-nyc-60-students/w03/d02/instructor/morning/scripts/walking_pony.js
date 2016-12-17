console.log("PONY POWER!!");

// How many pixels pony moves at a time



$(document).ready(function(){
  var pace = 10;
  var $pony = $('#pony');
  function ponyTrot() {
    //
    if ($pony.css('left') > '800px') {
      pace = -10;
      console.log('pass');
    } else if ($pony.css('left') < '10px') {
      pace = 10;
    }
    $pony.css('left', '+=' + pace + 'px');

  }

  setInterval(ponyTrot, 0.1);

});
