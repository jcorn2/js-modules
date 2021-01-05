(function() {
    var button = document.getElementById('goodbye-button');
    function sayGoodBye() {
        var greetingBox = document.getElementById('greeting-box');
        greetingBox.innerHTML = 'Goodbye for now World';
    }
    button.addEventListener('click', sayGoodBye);
    greetings.sayGoodBye = sayGoodBye;
})();
