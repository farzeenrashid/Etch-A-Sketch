document.addEventListener('DOMContentLoaded', function() {
  const shakeButton = document.querySelector('#left-side #shake-button');
  const eraserButton = document.querySelector('#left-side #eraser');
  const rainbowButton = document.querySelector('#left-side #rainbow');
  const warmButton = document.querySelector('#left-side #warm');
  const coldButton = document.querySelector('#left-side #cold');
  const penColorInput = document.querySelector('#pen-color');
  const canvasColorInput = document.querySelector('#canvas-color');
  const gridColorInput = document.querySelector('#grid-color');
  const sketchPad = document.querySelector('#sketch-pad');
  const gridCheckbox = document.querySelector('#grid-on-off');

  let currentMode = 'pen'; 
  let isMouseDown = false;

  shakeButton.addEventListener('click', function() {
    sketchPad.classList.add('shake');
    sketchPad.addEventListener('animationend', function() {
      sketchPad.classList.remove('shake');
    });
  });

  function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
      cell.style.backgroundColor = "";
    });
  }
  shakeButton.addEventListener("click", clearGrid); 

  canvasColorInput.addEventListener('input', function() {
    const whiteContainer = document.querySelector('#white-container');
    whiteContainer.style.backgroundColor = canvasColorInput.value;
  });

  gridColorInput.addEventListener('input', function() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
      cell.style.borderColor = gridColorInput.value;
    });
  });

  gridCheckbox.addEventListener('change', function() {
    const cells = document.querySelectorAll(".cell");
    if (this.checked) {
      cells.forEach(function(cell) {
        cell.style.borderStyle = "solid"; 
      });
    } else {
      cells.forEach(function(cell) {
        cell.style.borderStyle = "none";
      });
    }
  });

  eraserButton.addEventListener('click', function() {
    currentMode = 'eraser';
    toggleButtonStyles();
  });

  rainbowButton.addEventListener('click', function() {
    currentMode = 'rainbow';
    toggleButtonStyles();
  });

  warmButton.addEventListener('click', function() {
    currentMode = 'warm';
    toggleButtonStyles();
  });

  coldButton.addEventListener('click', function() {
    currentMode = 'cold';
    toggleButtonStyles();
  });

  penColorInput.addEventListener('input', function() {
    currentMode = 'pen';
    toggleButtonStyles();
  });

  function toggleButtonStyles() {
    eraserButton.classList.toggle('active', currentMode === 'eraser');
    rainbowButton.classList.toggle('active', currentMode === 'rainbow');
    warmButton.classList.toggle('active', currentMode === 'warm');
    coldButton.classList.toggle('active', currentMode === 'cold');
    penColorInput.classList.toggle('active', currentMode === 'pen');
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getWarmColor() {
    const letters = 
    ["ff2d00", "ff8267", "ff3d09", "ff5000", "b93b01", 
    "ff8f5c", "ff0000", "b03737", "bf2900", "d71d02", 
    "ff7c00", "ffad60", "ff8300", "ff9c00", "ffc872",
    "ff5700", "ffbd00", "ffcb38", "dea400", "faeb00",
    "ffde00", "fff29d", "efd227", "ff7800", "ff7800",
    "ffc300", "ff5733", "fadc2c", "ffc0a8", "f2cf00"];
    let color = "#";
    color += letters[Math.floor(Math.random() * 30)];
    return color;
  }

  function getColdColor() {
    const letters = 
    ["00fff2", "81fff9", "33d0c8", "00d3c9", "00ebff", 
    "00c6d7", "58edfa", "00d5ff", "00b2d5", "7fdbed", 
    "009fff", "009fff", "278fce", "0189ff", "75bfff",
    "1074ca", "046bff", "0053cc", "669ceb", "0047ff",
    "2d61e7", "819feb", "0027ff", "001fce", "374dc5",
    "1000ff", "8d86ff", "716bce", "3a2fdc", "150ab1"];
    let color = "#";
    color += letters[Math.floor(Math.random() * 30)];
    return color;
  }

  function handleMouseDown(event) {
    isMouseDown = true;
    if (event.target.classList.contains("cell")) {
      if (currentMode === 'eraser') {
        event.target.style.backgroundColor = '';
      } else if (currentMode === 'rainbow') {
        event.target.style.backgroundColor = getRandomColor();
      } else if (currentMode === 'warm') {
        event.target.style.backgroundColor = getWarmColor();
      } else if (currentMode === 'cold') {
        event.target.style.backgroundColor = getColdColor();
      } else if (currentMode === 'pen') {
        event.target.style.backgroundColor = penColorInput.value;
      }
    }
  }

  function handleMouseOver(event) {
    if (event.target.classList.contains("cell")) {
      if (isMouseDown) {
        if (currentMode === 'eraser') {
          event.target.style.backgroundColor = '';
        } else if (currentMode === 'rainbow') {
          event.target.style.backgroundColor = getRandomColor();
        } else if (currentMode === 'warm') {
          event.target.style.backgroundColor = getWarmColor();
        } else if (currentMode === 'cold') {
          event.target.style.backgroundColor = getColdColor();
        } else if (currentMode === 'pen') {
          event.target.style.backgroundColor = penColorInput.value;
        }
      }
    }
  }

  function handleMouseUp() {
    isMouseDown = false;
  }

  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseup", handleMouseUp);

  const gridContainer = document.getElementById("white-container");
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridContainer.appendChild(cell);
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