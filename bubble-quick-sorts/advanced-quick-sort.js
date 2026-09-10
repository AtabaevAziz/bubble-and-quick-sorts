function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [], right = [], equal = [];

    for (let el of arr) {
        if (el < pivot) left.push(el);
        else if (el > pivot) right.push(el);
        else equal.push(el);
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

function findKthMinElement(arr, k) {
    if (k < 0 || k >= arr.length) return "Индекс вне диапазона";
    const sortedArray = quickSort(arr);
    return sortedArray[k];
}

const numbers = [10, 20, 30, 40, 50];

console.log(findKthMinElement(numbers, 0));
console.log(findKthMinElement(numbers, 2));