function sortedSquaredArray(array) {
    const result = new Array(array.length);
    let left = 0;
    let right = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        const leftValue = Math.abs(array[left]);
        const rightValue = Math.abs(array[right]);
        if (leftValue > rightValue) {
            result[i] = leftValue * leftValue;
            left++;
        } else {
            result[i] = rightValue * rightValue;
            right--;
        }
    }
    return result;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-10]));
