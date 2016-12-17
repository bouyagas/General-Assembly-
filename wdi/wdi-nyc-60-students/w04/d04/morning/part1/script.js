console.log('Linked');
$(function() {
  // $('#name-click').click(function() {
  //  let name = '';
  //  while (name === '') {
  //    name = prompt('GIVE US A NAME');
  //  }
  //  $(this).text(name);
  // });

  $('#name-click').click(() => {
    let name = '';
    while (name === '') {
      name = prompt('GIVE US A NAME');
    }
    $(this).text(name);
  });

  $('#count-click').click(function() {
    let timer = parseInt(prompt('GIVE US SECONDS')) * 1000;
    setTimeout(function() {
      alert("DONE");
    }, timer)
  });

  $('#scroll-click').click(() => {
    let distance = parseInt(prompt('HOW MANY PX'));
    window.scrollBy(0,distance);
  });
});
