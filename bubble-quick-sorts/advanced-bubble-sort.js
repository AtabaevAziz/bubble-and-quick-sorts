function bubbleSortAdvanced(arr, toDescending = false) {
    const array = [...arr];
    const n = array.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            const shouldSwap = toDescending
                ? array[j] < array[j + 1]
                : array[j] > array[j + 1];
            if (shouldSwap) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}

console.log(bubbleSortAdvanced([5, 3, 8, 1]));
console.log(bubbleSortAdvanced([5, 3, 8, 1], true));