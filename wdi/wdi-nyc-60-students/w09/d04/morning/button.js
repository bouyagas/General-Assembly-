var hagrid = {
  name: "Rubeus Hagrid",
  quote: "You're a wizard, Harry!",
  sayQuote: function() {
    console.log(this.quote)
  }
}

var longbottom = {
  name: "Neville Longbottom",
  quote: "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... ",
  sayQuote: function() {
    console.log(this.quote)
  }
}


var button = document.getElementById('sorcerersButton');

button.addEventListener(
  "click",
  hagrid.sayQuote
)

button.addEventListener("mouseover",
    function() {
      button.classList.add('swashOut');
    }
)

button.addEventListener("mouseout",
    function() {
      button.classList.remove('swashOut');
    }
)
