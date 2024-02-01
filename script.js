document.addEventListener("DOMContentLoaded", function() {
    const fire = document.querySelector('.fire');
    const buttonHeader = document.querySelector('.button-header');

    buttonHeader.addEventListener('click', function() {
        fire.textContent = "Olá Dev Club!!!";
    });
});


z