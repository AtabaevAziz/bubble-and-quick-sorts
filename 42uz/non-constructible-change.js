function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let currentSum = 0;
    for (const coin of coins) {
        if (coin > currentSum + 1) {
            return currentSum + 1;
        }
        currentSum += coin;
    }
    return currentSum + 1;
}

console.log(nonConstructibleChange([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
