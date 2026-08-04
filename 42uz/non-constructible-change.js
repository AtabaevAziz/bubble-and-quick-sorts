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

console.log(nonConstructibleChange([1, 2, 3, 4, 5, 6, 7]));
console.log(nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]));
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));