var container = document.querySelector('.key');

var setContainerContents = function (key) {
    var charFromCode = String.fromCharCode(key);
    container.textContent = charFromCode;
};

var onKeyPress = function (ev) {
    var keyCode = ev.keyCode;

    setContainerContents(keyCode);
};


document.addEventListener('keypress', onKeyPress);
