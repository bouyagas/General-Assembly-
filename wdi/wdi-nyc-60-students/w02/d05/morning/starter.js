console.log('javascript connected!')

  var hoverCounter = 0
  var doubleCounter = 0

function flatten2(){
  console.log('box2 is 200px');
  $('#box1').on('mouseover', function(){
    $('#box2').css('height', '200px');
  });
}


function mod1() {
  console.log('box1 is flattening');
  $('#box2').on('mouseover', function() {
   if (hoverCounter < 4){
    console.log(hoverCounter);
    $('#box1').css('height', .8*($('#box1').height()));
      hoverCounter++
   }else{
    hoverCounter = 0;
    $('#box1').css('height', 2*($('#box1').height()));
   }
  });
}


function bigger1(){
  $('#box1').on('click', function(){
     console.log('box1 just grew 20%');
    $('#box1').css('height', 1.2*($('#box1').height()));
  });
}

function colorSwap() {
  $('#box1').on('mousedown', function(){
    console.log('color change !');
    $('#box1').css('background-color', 'navy');
    $('#box2').css('background-color', 'maroon');
  });
}

function roundCorners1() {
  $('#box1').on('mouseup', function() {
     console.log('box 1 corner rounded');
    $('#box1').animate({'border-radius':'20%'}, '200');
  });
}



function box2Huge() {
  $('#box2').on('dblclick', function(){
    if(doubleCounter < 3){
      console.log('CLICK MORE');
      doubleCounter++
    }else{
    console.log('2 GREW TO GIANT PROPORTIONS!');
     $('#box2').css({
        'height':'100vh',
        'width':'100vw',
        'top':'0px',
        'left':'0px'
      });
    }
  });
}


$(document).ready(function() {
  flatten2();
  mod1();
  bigger1();
  colorSwa  p();
  roundCorners1();
  box2Huge();
});


