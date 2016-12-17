console.log('javascript connected!')

$(function(){
  var hoverCounter = 0
  var doubleCounter = 0


  function flatten2(){
    console.log('box2 is 200px');
    $('#box2').css('height','200px')
  }


  function mod1(){
    console.log('box1 is flattening!')
    if (hoverCounter < 4){
      console.log(hoverCounter)
      $('#box1').css('height', .8*($('#box1').height()))
      hoverCounter++
    } else {
      hoverCounter=0
      $('#box1').css('height', 2*height1.height())
    }
  }

  function bigger1(){
    console.log('box1 just grew 20%')
    $('#box1').css('height', 1.2*($('#box1').height()))
  }

  function colorSwap(){
    console.log('color change!');
    $('#box1').css('background-color', 'navy');
    $('#box2').css('background-color', 'maroon');
  }

  function roundCorners1(){
    console.log('box 1 corners rounded')
    // $('#box1').css('border-radius', '20%')
    $('#box1').animate({'border-radius': '20%'},200)
  }

  function box2Huge(){
    if(doubleCounter < 3){
      console.log('CLICK MORE')
      doubleCounter++
    }else{
      console.log('2 GREW TO GIANT PROPORTIONS!')
      $('#box2').css({
        'height':'100vh',
        'width':'100vw',
        'top':'0px',
        'left':'0px'
      })
    }
  }



  $('#box1').mouseover(flatten2);
  $('#box2').mouseover(mod1);
  $('#box1').click(bigger1);
  $('#box1').mousedown(colorSwap);
  $('#box1').mouseup(roundCorners1);
  $('#box2').dblclick(box2Huge);


})
