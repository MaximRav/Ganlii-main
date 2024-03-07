var radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function (radio) {
    radio.addEventListener('click', function () {
        if (this.checked) {
            this.checked = false;
        }
    });
});
