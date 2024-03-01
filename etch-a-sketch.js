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

document.addEventListener('DOMContentLoaded', function() {
  const shakeButton = document.querySelector('#left-side #shake-button');

  function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
      cell.style.backgroundColor = "";
    });
  }
  
  shakeButton.addEventListener("click", clearGrid); 
});


document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById("white-container");

  function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  function handleMouseDown(event) {
    isMouseDown = true;
    if (event.target.classList.contains("cell")) {
      event.target.style.backgroundColor = getRandomColor();
    }
  }

  function handleMouseOver(event) {
    if (event.target.classList.contains("cell")) {
      if (isMouseDown) {
            event.target.style.backgroundColor = getRandomColor();
      }
    }
  }

  function handleMouseUp(event) {
    isMouseDown = false;
  }

  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseup", handleMouseUp);


  for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          gridContainer.appendChild(cell);
      }
  }

  function handleMouseOutside(event) {
    isMouseDown = true;
    if (event.target.classList.contains("cell")) {
      event.target.style.backgroundColor = getRandomColor();
    }
  }

});


document.addEventListener("DOMContentLoaded", function() {
  const draggable = document.getElementById('slider-dyellow');
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
      const gridContainer = document.getElementById("white-container");

      if (newLeft <= 100) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(10, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(5, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 100 & newLeft <= 200) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(20, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(10, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 20; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 200 & newLeft <= 300) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(30, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(15, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 30; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 300 & newLeft <= 400) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(40, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(20, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 20; i++) {
          for (let j = 0; j < 40; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 400 & newLeft <= 500) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(50, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(25, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 25; i++) {
          for (let j = 0; j < 50; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      if (newLeft > 500 & newLeft <= 600) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(60, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(30, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 30; i++) {
          for (let j = 0; j < 60; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 600 & newLeft <= 700) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(70, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(35, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 35; i++) {
          for (let j = 0; j < 70; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 700 & newLeft <= 800) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(110, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(55, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 55; i++) {
          for (let j = 0; j < 110; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

      else if (newLeft > 800 & newLeft <= 900) {
        draggable.style.left = Math.max(newLeft, 0) + 'px';
        gridContainer.style.gridTemplateColumns = 'repeat(150, auto)';
        gridContainer.style.gridTemplateRows = 'repeat(75, auto)';
        gridContainer.innerHTML = '';
        for (let i = 0; i < 75; i++) {
          for (let j = 0; j < 150; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gridContainer.appendChild(cell);
          }
        }
      }

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