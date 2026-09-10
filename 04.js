class Solution {
    maxOfSubarrays(arr, k) {
        let result = [];
        let deque = [];
        for (let i = 0; i < arr.length; i++) {
            while (deque.length > 0 && deque[0] <= i - k) {
                deque.shift();
            }
            while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
                deque.pop();
            }
            deque.push(i);
            if (i >= k - 1) {
                result.push(arr[deque[0]]);
            }
        }
        return result;
    }
}

let solution = new Solution();
let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let k = 3;

console.log(solution.maxOfSubarrays(arr, k).join(" "));