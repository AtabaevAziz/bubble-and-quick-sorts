function kClosest(points, k) {
    function distance(point) {
        return point[0] * point[0] + point[1] * point[1];
    }
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = distance(arr[Math.floor(arr.length /2)]);
        const left = [];
        const equal = [];
        const right = [];
        for (let point of arr) {
            const dist = distance(point);
            if (dist < pivot) {
                left.push(point);
            } else if (dist > pivot) {
                right.push(point);
            } else {
                equal.push(point)
            }
        }
        return [...quickSort(left), ...equal, ...quickSort(right)];
    }
    const sorted = quickSort(points);
    return sorted.slice(0, k);
}

console.log(kClosest([[1, 3], [-2, 2]], 1));
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
console.log(kClosest([[0, 1], [1, 0]], 2));
console.log(kClosest([[2, 2]], 1));
