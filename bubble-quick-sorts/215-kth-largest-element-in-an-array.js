function findKthLargest(nums, k) {
    if (k < 1 || k > nums.length) {
        return undefined;
    }
    function quickSelect(arr, rank) {
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const right = [];
        const equal = [];
        for (let num of arr) {
            if(num > pivot) {
                right.push(num);
            } else if (num < pivot) {
                left.push(num);
            } else {
                equal.push(num);
            }
        }
        if (rank <= right.length) {
            return quickSelect(right, rank);
        }
        if (rank <= right.length + equal.length) {
            return pivot
        }
        return quickSelect(left, rank - right.length - equal.length);
    }
    return quickSelect(nums, k);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([1], 1));
console.log(findKthLargest([2, 1], 2));
