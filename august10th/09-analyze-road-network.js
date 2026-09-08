function analyzeRoads(matrix) {
    let n = matrix.length;
    let symmetric = true;
    // Check symmetry
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                symmetric = false;
                break;
            }
        }
        if (!symmetric) {
            break;
        }
    }
    // Find hub city
    let hubCity = 0;
    let maxConnections = -1;
    for (let i = 0; i < n; i++) {
        let connections = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && matrix[i][j] !== 0) {
                connections++;
            }
        }
        if (connections > maxConnections) {
            maxConnections = connections;
            hubCity = i;
        }
    }
    return {
        symmetric: symmetric,
        hubCity: hubCity,
        connections: maxConnections
    };
}

let roads = [
    [0, 10, 20, 0],
    [10, 0, 5, 15],
    [20, 5, 0, 7],
    [0, 15, 7, 0]
];

console.log(analyzeRoads(roads));