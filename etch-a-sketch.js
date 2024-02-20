document.addEventListener('DOMContentLoaded', function() {
    const shakeButton = document.querySelector('#left-side #shake-button');
    const sketchPad = document.querySelector('#sketch-pad');

    shakeButton.addEventListener('click', function() {
        sketchPad.classList.add('shake');
        sketchPad.addEventListener('animationend', function() {
        sketchPad.classList.remove('shake');
        });
    });
});
