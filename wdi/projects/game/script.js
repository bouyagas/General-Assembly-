console.log('Javascript Connnected !');
function captain () {
   setInterval(moveplager6, 10);
       var keys = {}
     $(document).keydown(function(e) {
        keys[e.keyCode] = true;
     });

     $(document).keyup(function(e) {
       delete keys[e.keyCode];
     });

function moveplager6() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $('.player6, img ').animate({left: '-=5'}, 0);
        }
        if (direction == 38) {
            $('.player6, img ').animate({top: '-=5'}, 0);
        }
        if (direction == 39) {
            $('.player6, img').animate({left: '+=5'}, 0);
        }
        if (direction == 40) {
            $('.player6,img ').animate({top: '+=5'}, 0);
        }

       // keypress k
        if(direction == 75){
          $('img').animate({left: '1700'}, 1000);
       //    var ball = $('img').offset();
       //    var p12 =  $('.player12').offset();

       //    if( ball >= p12 ){
       //      alert('Goal !!!');
       //    }
       }

       // keypress s
       if(direction == 83){
         $('img').offset({top: 387, left: 698});
       }
    }
  }
}
 // Blue Team
function playerOne() {
  $(' .player1').animate({'marginBottom': '0'}, {
     duration: 1000,
     complete: function() {
  $('.player1').animate({marginBottom: 120}, {
     duration: 1000,
     complete: playerOne});
  }});
}


function playerTwo() {
  $(' .player2').animate({'marginBottom': '0'}, {
     duration: 1000,
     complete: function() {
  $('.player2').animate({marginBottom: 120}, {
     duration: 1000,
     complete: playerTwo});
  }});
}

function playerThree() {
  $('.player3 ').animate({'marginBottom': '0'}, {
     duration: 1000,
     complete: function() {
  $('.player3').animate({marginBottom: 120}, {
     duration: 1000,
     complete: playerThree});
  }});
}

function playerFour() {
  $('.player4 ').animate({'marginBottom': '0'}, {
     duration: 1000,
     complete: function() {
  $('.player4').animate({marginBottom: 120}, {
     duration: 1000,
     complete: playerFour});
  }});
}


function playerFive() {
  $('.player5').animate({'marginBottom': '0'}, {
     duration: 1000,
     complete: function() {
  $('.player5').animate({marginBottom: 120}, {
     duration: 1000,
     complete: playerFive});
  }});
}



// Red Team

function playerSeven() {
  $('.player7').animate({'marginBottom': '120'}, {
      duration: 1000,
      complete: function() {
   $('.player7').animate({marginBottom: 0}, {
      duration: 1000,
      complete: playerSeven});
  }});
}

function playerEight() {
  $('.player8').animate({'marginBottom': '120'}, {
        duration: 1000,
        complete: function() {
   $('.player8').animate({marginBottom: 0}, {
      duration: 1000,
      complete: playerEight});
  }});
}

function playerNine() {
    $('.player9').animate({'marginBottom': '120'}, {
      duration: 1000,
      complete: function() {
   $('.player9').animate({marginBottom: 0}, {
      duration: 1000,
      complete: playerNine});
  }});

}


function playerTen() {
    $('.player10').animate({'marginBottom': '120'}, {
      duration: 1000,
      complete: function() {
   $('.player10').animate({marginBottom: 0}, {
      duration: 1000,
      complete: playerTen});
  }});
}

 // playerEleven


function playerTwelve() {
  $(' .player12').animate({'marginBottom': '120'}, {
     duration: 1000,
     complete: function() {
  $('.player12').animate({marginBottom: 0}, {
     duration: 1000,
     complete: playerTwelve});
  }});
}


function soccerBall(){
   $('img').animate({'marginBottom': '220'}, {
      duration: 100,
      complete: function() {
   $('img').animate({marginBottom: 0}, {
      duration: 100,
      complete: soccerBall});
  }});
}



$(document).ready(function () {
 captain();
 soccerBall();
 playerOne();
 playerTwo();
 playerThree();
 playerFour();
 playerFive();
 playerSeven();
 playerEight();
 playerNine();
 playerTen();
 playerTwelve();
});






