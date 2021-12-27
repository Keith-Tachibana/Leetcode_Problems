/**
* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
*
* An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded * by water.
*
*   Example 1:
*
* Input: grid = [
*   ["1","1","1","1","0"],
*   ["1","1","0","1","0"],
*   ["1","1","0","0","0"],
*   ["0","0","0","0","0"]
* ]
*   Output: 1
*
*   Example 2:
*
* Input: grid = [
*   ["1","1","0","0","0"],
*   ["1","1","0","0","0"],
*   ["0","0","1","0","0"],
*   ["0","0","0","1","1"]
* ]
*   Output: 3
*
* Constraints:
*
* m == grid.length
* n == grid[i].length
* 1 <= m, n <= 300
* grid[i][j] is '0' or '1'.
*/

const numberOfIslands = gridArray => {
  let count = 0;

  for (let i = 0; i < gridArray.length; i++) {
    for (let j = 0; j < gridArray[i].length; j++) {
      if (gridArray[i][j] === "1") {
        count += 1;
        callBFS(gridArray, i, j);
      }
    }
  }
  return count;
}

function callBFS(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") return;
  grid[i][j] = "0";
  callBFS(grid, i + 1, j); // up
  callBFS(grid, i - 1, j); // down
  callBFS(grid, i, j - 1); // left
  callBFS(grid, i, j + 1); // right
}

const gridExample = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numberOfIslands(gridExample)); // Should return 3

/**
 * Trick: use BFS to explore any island(s) we may find and turn those 1's to 0's,
 * while turning any 1's that those 1's are connected to all to 0's, and finally
 * making sure we increment the counter each time we do this by 1. Then we continue
 * looking for more islands, and turn all of its 1's to 0's like before, etc.
 */
