import goodbyeFunction from './sayGoodbye.js';
import('./sayHello.js').then((sayHelloModule) => {
    var button = document.getElementById('hello-button');
    button.addEventListener('click', sayHelloModule.sayHello);
    var button = document.getElementById('goodbye-button');
    button.addEventListener('click', goodbyeFunction);
});
