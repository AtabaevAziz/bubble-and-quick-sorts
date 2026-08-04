function generatePascalTriangle(n) {
    const triangle = [];
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        const row = new Array(rowIndex + 1).fill(1);
        for (let column = 1; column < rowIndex; column++) {
            row[column] =
                triangle[rowIndex - 1][column - 1] +
                triangle[rowIndex - 1][column];
        }
        triangle.push(row);
    }
    return triangle;
}

console.log(generatePascalTriangle([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));