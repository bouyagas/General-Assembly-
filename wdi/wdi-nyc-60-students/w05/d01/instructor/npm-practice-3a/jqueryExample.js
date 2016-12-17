// Thanks Valeria!

/* eslint-disable no-alert, no-console */
$(document).ready(() => {
  console.log('working');

  const $searchField = $('input');
  const $submit = $('button');

  const getData = () => {
    $.ajax({
      url: `http://www.omdbapi.com/?t=${$searchField.val()}`,
      method: 'GET',
      dataType: 'json',
      data: {
        q: $searchField.val(),
      },
    }).done((data) => {
      console.log(data);


     // let $div = ('<div>').hasClass('container');

      const $title = $('<h1>');
      const $poster = $('<img>').attr('src', data.Poster);

      $title.text(data.Title);
      $title.appendTo('section');

      $($poster).appendTo('section');
      // $($div).appendTo('section');
      // console.log($movieList);
    });
  };
  $submit.on('click', () => getData());
});
