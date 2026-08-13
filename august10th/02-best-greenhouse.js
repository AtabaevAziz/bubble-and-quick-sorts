function bestGreenhouse(matrix, K) {
    const N = matrix.length;
    const M = matrix[0].length;
    let maxSum = 0;
    let bestRow = 0;
    let bestCol = 0;
    let bestMatrix = [];
    for (let i = 0; i <= N - K; i++) {
        for (let j = 0; j <= M - K; j++) {
            let sum = 0;
            for (let x = i; x < i + K; x++) {
                for (let y = j; y < j + K; y++) {
                    sum += matrix[x][y];
                }
            }
            if (sum > maxSum) {
                maxSum = sum;
                bestRow = i;
                bestCol = j;
            }
        }
    }
    for (let i = bestRow; i < bestRow + K; i++) {
        bestMatrix.push(
            matrix[i].slice(bestCol, bestCol + K)
        );
    }
    return {
        row: bestRow,
        col: bestCol,
        sum: maxSum,
        matrix: bestMatrix
    };
}

const field = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [2, 3, 20, 5],
    [1, 1, 10, 10]
];
console.log(bestGreenhouse(field, 2));