console.log('connected !!!')
'use strict'
$(document).ready(() =>{

  const $body = $('body');
  const $searchField = $('input');
  const $submit = $('button');
  // annoymus function it just call once
  // $submit.on('click', function () {
  //   searchbook();
  // });

   // Callback function
   $submit.on('click', searchbook);

 function searchbook() {
    $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes',
        method: 'GET',
        dataType: 'json',
        data: {
         q: $searchField.val()
       }
      })
      .done( data => {
        const $bookList = $('<ul>');
        for(let i = 0; i < data.items.length; i++){
          let $li = $('<li>');
          let $book = $('<details>');
          let $title = $('<summary>');
          let $description = $('<p>');
          $title.text(data.items[i].volumeInfo.title);
          $description.text(data.items[i].volumeInfo.description);
          $book.append($title, $description);
          $li.append($book);
          $bookList.append($li);
        }
          $body.append($bookList);
      });
  }
});
