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
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
      }
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const draggable = document.getElementById('draggable');
  let initialX;
  let isDragging = false;
  let initialLeft;
  
  function onMouseDown(event) {
    isDragging = true;
    initialX = event.clientX;
    initialLeft = draggable.offsetLeft;
    draggable.style.cursor = 'grabbing';
  }
  
  function onMouseMove(event) {
    if (isDragging) {
      const maxDrag = 900;
      const deltaX = event.clientX - initialX;
      const newLeft = initialLeft + deltaX;
      const limitedLeft = Math.min(newLeft, maxDrag);
      draggable.style.left = Math.max(limitedLeft, 0) + 'px';
    }
  }
  
  function onMouseUp() {
    if (isDragging) {
      isDragging = false;
      draggable.style.cursor = 'grab';
    }
  }
  
  draggable.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp); 
});