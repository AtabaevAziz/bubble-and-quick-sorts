function  sortArray(nums) {
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const equal = [];
        const right = [];

        for (let num of arr) {
            if (num < pivot) {
                left.push(num);
            } else if (num > pivot) {
                right.push(num);
            } else {
                equal.push(num);
            }
        }
        return [...quickSort(left), ...equal, ...quickSort(right)];
    }
    return quickSort(nums);
}

console.log("Обычный:", sortArray([5, 2, 3, 1]));
