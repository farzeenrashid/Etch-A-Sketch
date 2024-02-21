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

document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("white-container");
    
    // Create 16x16 grid
    for (let i = 0; i < 5.10526316; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
      }
    }
  });