(function() {
    var button = document.getElementById('hello-button');
    function sayHello() {
        var greetingBox = document.getElementById('greeting-box');
        greetingBox.innerHTML = 'Hello World';
    }
    button.addEventListener('click', sayHello);
    greetings.sayHello = sayHello;
})();
