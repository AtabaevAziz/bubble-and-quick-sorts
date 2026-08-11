function findSeats(matrix, K) {
    const N = matrix.length;
    const M = matrix[0].length;
    for (let i = 0; i < N; i++) {
        let count = 0;
        for (let j = 0; j < M; j++) {
            if (matrix[i][j] === 0) {
                count++;
            } else {
                count = 0;
            }
            if (count === K) {
                return [i, j - K + 1];
            }
        }
    }
    return -1;
}

const cinema = [
    [1, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]
];
console.log(findSeats(cinema, 3));
