// Api documentation: http://api.jquery.com/


// Selecting

// Select all rows
$('tr');

// Select table
$('table')

// Select only rows that are in the table body
$('table tbody tr')

// Add a class to the table
$('table').addClass('main-table');

// Add an id
$('h1').prop('id', 'main-header');


// ----------- Selecting





// Manipulating http://api.jquery.com/category/manipulation/

// css
$('tr').eq(0).css({
  'background-color': 'black'
})

// html
$('tr td').eq(1).html('<h1>whats up</h1>');

// hide / show
$('tr tbody').hide();
$('tr tbody').show();


// ----------- Manipulating


// Creating and Appending

// create
var $ul = $('<ul>');

// Append
$('body').append($ul);

// Prepend
$('body').prepend($ul);

// before
$ul.before('whats up');

// after
$ul.after('whats up');

// ----------- Appending


// Remove and empty

// remove
$('ul').remove();

// empty
$('table').empty();



// --------------- Remove and empty
