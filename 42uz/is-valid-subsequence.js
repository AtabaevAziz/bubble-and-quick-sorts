function isValidSubsequence(array, sequence) {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === sequence[j]) {
            j++;
        }
        if (j === sequence.length) {
            return true;
        }
    }
    return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25]));