function canReach(grid) {
    let n = grid.length;
    let m = grid[0].length;
    if (grid[0][0] === 1 || grid[n - 1][m - 1] === 1) {
        return false;
    }
    let dp = new Array(m).fill(false);
    dp[0] = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                dp[j] = false;
            } else if (j > 0) {
                dp[j] = dp[j] || dp[j - 1];
            }
        }
    }
    return dp[m - 1];
}

let warehouse = [
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
];

console.log(canReach(warehouse));
// true