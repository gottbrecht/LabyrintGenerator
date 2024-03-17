function solveMaze(mazeData) {
    const maze = mazeData.maze;
    const start = mazeData.start;
    const goal = mazeData.goal;

    const path = [];

    //recursive runction
    function dfs(row, col) {
        console.log("Visiting cell at row:", row, "and col:", col);

        maze[row][col].visited = true;

        if (row === goal.row && col === goal.col) {
            path.push({ row, col });
            console.log("Goal found!");

            return true;
        }

        const directions = ["north", "east", "south", "west"];
        for (const direction of directions) {

            let newRow = row, newCol = col;
            switch (direction) {
                case "north":
                    newRow--;
                    break;
                case "east":
                    newCol++;
                    break;
                case "south":
                    newRow++;
                    break;
                case "west":
                    newCol--;
                    break;
            }

            if (newRow >= 0 && newRow < maze.length && newCol >= 0 && newCol < maze[0].length && !maze[newRow][newCol].visited && !maze[row][col][direction]) {
                if (dfs(newRow, newCol)) {
                    path.push({ row, col });
                    return true;
                }
            }
        }

        return false;
    }

    dfs(start.row, start.col);

    return path.reverse(); 
}


window.solveMaze = solveMaze;
