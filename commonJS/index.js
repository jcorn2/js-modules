const sayHello = require('./sayHello');
const sayGoodBye = require('./sayGoodbye');

var button = document.getElementById('hello-button');
button.addEventListener('click', sayHello);
var button = document.getElementById('goodbye-button');
button.addEventListener('click', sayGoodBye);
