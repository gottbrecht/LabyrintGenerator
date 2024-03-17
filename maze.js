const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

function drawMaze(mazeData) { //tegner labyrinten
  const rows = mazeData.rows;
  const cols = mazeData.cols;
  const maze = mazeData.maze;

  const cellWidth = canvas.width / cols;
  const cellHeight = canvas.height / rows;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = maze[row][col];
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
}

/*
function generateMaze() { //mazeData
 
  const mazeData = generate(rows, cols);
  drawMaze(mazeData);
}
*/