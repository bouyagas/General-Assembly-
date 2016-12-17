console.log('Linked');

$(function() {
  $('#name-click').click(function() {
    let name = prompt("Hey what does this button say?");
    $(this).text(name);
  });

  // Fat arrow version, using event parameter because fat arrow does not bind 'this'
  // $('#name-click').click( event => {
  //   let name = prompt("Hey what does this button say?");
  //   event.target.innerText = name;
  // });

  $('#count-click').click(() => {
    let seconds = parseInt(prompt("Enter the number of seconds to wait before I alert 'DONE!'")) * 1000;
    setTimeout(function() {
      alert("DONE!");
    }, seconds);
  });

  $('#scroll-click').click(() => {
    let scrollDistance = parseInt(prompt("How many pixels should I scroll down?"));
    window.scrollBy(0, scrollDistance);
  });
});
