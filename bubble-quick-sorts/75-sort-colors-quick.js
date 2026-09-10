function sortColors(nums) {
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
    const sorted = quickSort(nums);
    for (let i = 0; i< nums.length; i++) {
        nums[i] = sorted[i];
    }
}

let arr1 = [2, 0, 2, 1, 1, 0];
sortColors(arr1);
console.log(arr1);

let arr2 = [2, 0, 1];
sortColors(arr2);
console.log(arr2);

let arr3 = [];
sortColors(arr3);
console.log(arr3);

let arr4 = [1];
sortColors(arr4);
console.log(arr4);

