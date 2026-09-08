function findHeatIslands(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let result = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let x = matrix[i][j];
            let isIsland = true;
            if (i > 0 && x <= matrix[i - 1][j]) isIsland = false;
            if (i < n - 1 && x <= matrix[i + 1][j]) isIsland = false;
            if (j > 0 && x <= matrix[i][j - 1]) isIsland = false;
            if (j < m - 1 && x <= matrix[i][j + 1]) isIsland = false;
            if (isIsland) {
                result.push([i, j, x]);
            }
        }
    }
    return result;
}

let temperatures = [
    [20, 25, 21],
    [18, 30, 19],
    [17, 22, 16]
];

console.log(findHeatIslands(temperatures));
// [ [1, 1, 30] ]