function twoNumberSum(array, targetSum) {
    const seen = new Set();
    for (const num of array) {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            return complement < num
                ? [complement, num]
                : [num, complement];
        }
        seen.add(num);
    }
    return [];
}

console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([15], 15));