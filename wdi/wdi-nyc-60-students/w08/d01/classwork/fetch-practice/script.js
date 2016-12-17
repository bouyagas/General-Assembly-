'use strict';
(() => {
  function randomUser() {
  fetch('http://randomuser.me/api')
  .then(xhr => xhr.json())
  .then(data => console.log(data))
  }
  randomUser();
})();
