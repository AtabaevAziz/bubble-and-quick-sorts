function bubbleSort(arr) {
    const array = [...arr];
    const n = array.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}

console.log("Обычный массив:", bubbleSort([5, 3, 8, 4, 2]));
console.log("Пустой массив:", bubbleSort([]));
console.log("Один элемент:", bubbleSort([42]));
console.log("С дубликатами:", bubbleSort([3, 1, 3, 2, 1]));