function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
    const equal = [];
    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log("Обычный массив:", quickSort([5, 3, 8, 4, 2]));
console.log("Пустой массив:", quickSort([]));
console.log("Один элемент:", quickSort([42]));
console.log("С дубликатами:", quickSort([3, 1, 3, 2, 1]));