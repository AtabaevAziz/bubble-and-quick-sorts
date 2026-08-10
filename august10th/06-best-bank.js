function findBestBank(matrix) {
    const balances = [];
    let bestBank = 0;
    let bestBalance = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        let incoming = 0;
        let outgoing = 0;
        for (let j = 0; j < matrix.length; j++) {
            outgoing += matrix[i][j];
            incoming += matrix[j][i];
        }
        const balance = incoming - outgoing;
        balances.push(balance);
        if (balance > bestBalance) {
            bestBalance = balance;
            bestBank = i;
        }
    }
    return {
        balances: balances,
        bestBank: bestBank,
        bestBalance: bestBalance
    };
}

const matrix = [
    [0, 100, 50],
    [20, 0, 30],
    [70, 10, 0]
];
console.log(findBestBank(matrix));