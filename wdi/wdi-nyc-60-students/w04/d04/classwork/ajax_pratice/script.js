'use strict';
console.log('connected !');

$(document).ready(() => {

$.ajax({
  url: 'http://api.randomuser.me?results=5',

  method: 'GET',

  type: 'json',

  success: (data) => {
    console.log(data);
    const $nameList = $('<ul>');
    for(let i = 0; i < data.results.length; i++){
      let firstName = data.results[i].name.first;
      let lastName = data.results[i].name.last;
      let $li = $('<li>');
      $li.text(`${firstName} ${lastName} is a Student at GA`);
      $nameList.append($li);
    }
      $('body').append($nameList);
   }
})

});
