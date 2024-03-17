function maze_generator(rows, cols) {

    let maze = [];
    for (let i = 0; i < rows; i++) {
        maze.push(Array.from({ length: cols }, () => ({ north: true, east: true, south: true, west: true })));
    }

    (function divide(row, col, width, height, orientation) {
        if (width < 2 || height < 2) return;

        let horizontal = orientation === "horizontal";

        let wallX = col + (horizontal ? 0 : Math.floor(Math.random() * (width - 1)));
        let wallY = row + (horizontal ? Math.floor(Math.random() * (height - 1)) : 0);

        let passageX = wallX + (horizontal ? Math.floor(Math.random() * width) : 0);
        let passageY = wallY + (horizontal ? 0 : Math.floor(Math.random() * height));

        for (let i = row; i < row + height; i++) {
            for (let j = col; j < col + width; j++) {
                if (horizontal && i === wallY && j !== passageX) {
                    maze[i][j].south = false;
                    maze[i + 1][j].north = false;
                } else if (!horizontal && j === wallX && i !== passageY) {
                    maze[i][j].east = false;
                    maze[i][j + 1].west = false;
                }
            }
        }

        if (horizontal) {
            divide(row, col, width, wallY - row + 1, chooseOrientation(width, wallY - row + 1));
            divide(wallY + 1, col, width, row + height - wallY - 1, chooseOrientation(width, row + height - wallY - 1));
        } else {
            divide(row, col, wallX - col + 1, height, chooseOrientation(wallX - col + 1, height));
            divide(row, wallX + 1, col + width - wallX - 1, height, chooseOrientation(col + width - wallX - 1, height));
        }
    })(0, 0, cols, rows, chooseOrientation(cols, rows));

    let start = { row: Math.floor(Math.random() * rows), col: 0 };
    let goal = { row: Math.floor(Math.random() * rows), col: cols - 1 };

    return { rows, cols, start, goal, maze };
}

function chooseOrientation(width, height) {
    return (width < height) ? "horizontal" : "vertical";
}
