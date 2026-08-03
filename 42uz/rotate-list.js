function rotateList(nums, k) {
    if (nums.length === 0) return;
    k = k % nums.length;
    function reverse(arr, left, right) {
        while (left < right) {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
}

console.log(rotateList([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateList([-1,-100,3,99], 2));