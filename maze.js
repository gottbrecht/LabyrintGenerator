const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
let rows = 10;
let cols = 10;

function drawMaze(mazeData, path) { //tegner labyrinten
  const maze = mazeData.maze;

  const cellWidth = canvas.width / cols;
  const cellHeight = canvas.height / rows;

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  //draws
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = maze[row][col];
      ctx.strokeStyle = "black"; //walls

      if (cell.north) {
        ctx.beginPath();
        ctx.moveTo(col * cellWidth, row * cellHeight);
        ctx.lineTo((col + 1) * cellWidth, row * cellHeight);
        ctx.stroke();
      }
      if (cell.east) {
        ctx.beginPath();
        ctx.moveTo((col + 1) * cellWidth, row * cellHeight);
        ctx.lineTo((col + 1) * cellWidth, (row + 1) * cellHeight);
        ctx.stroke();
      }
      if (cell.south) {
        ctx.beginPath();
        ctx.moveTo(col * cellWidth, (row + 1) * cellHeight);
        ctx.lineTo((col + 1) * cellWidth, (row + 1) * cellHeight);
        ctx.stroke();
      }
      if (cell.west) {
        ctx.beginPath();
        ctx.moveTo(col * cellWidth, row * cellHeight);
        ctx.lineTo(col * cellWidth, (row + 1) * cellHeight);
        ctx.stroke();
      }
    }
  }

  //draw path
  ctx.strokeStyle = "green"; 
  ctx.lineWidth = 4; //adjust line width

  ctx.beginPath();
  for (let i = 0; i < path.length; i++) {
      const { row, col } = path[i];
      const x = (col + 0.5) * cellWidth;
      const y = (row + 0.5) * cellHeight;
      if (i === 0) {
          ctx.moveTo(x, y);
      } else {
          ctx.lineTo(x, y);
      }
  }
  ctx.stroke();
}


function initializeMaze() { //mazeData
  const mazeData = maze_generator(rows, cols);
  const path = solveMaze(mazeData);
  drawMaze(mazeData, path);
}

initializeMaze();
