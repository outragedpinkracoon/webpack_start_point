var Frank = require('./domain/models/dude')
window.onload = function () {
  var frank = new Frank();
  var element = document.getElementById('name');
  element.innerText = frank.name;
}