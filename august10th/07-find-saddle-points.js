function findSaddlePoints(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let result = [];
    let columnMax = new Array(m);
    // Maximum value in each column
    for (let j = 0; j < m; j++) {
        columnMax[j] = matrix[0][j];
        for (let i = 1; i < n; i++) {
            if (matrix[i][j] > columnMax[j]) {
                columnMax[j] = matrix[i][j];
            }
        }
    }
    // Minimum value in each row
    for (let i = 0; i < n; i++) {
        let rowMin = matrix[i][0];
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] < rowMin) {
                rowMin = matrix[i][j];
            }
        }
        for (let j = 0; j < m; j++) {
            if (
                matrix[i][j] === rowMin &&
                matrix[i][j] === columnMax[j]
            ) {
                result.push([i, j, matrix[i][j]]);
            }
        }
    }
    if (result.length === 0) {
        console.log("No saddle points found.");
    }
    return result;
}

let costs = [
    [3, 1, 4],
    [2, 0, 5],
    [8, 7, 9]
];

console.log(findSaddlePoints(costs));
// [ [2, 1, 7] ]