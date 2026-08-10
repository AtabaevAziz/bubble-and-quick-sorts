function findBestStore(sales, prices) {
    const revenues = [];
    let bestStore = 0;
    let bestRevenue = 0;
    for (let i = 0; i < sales.length; i++) {
        let revenue = 0;
        for (let j = 0; j < prices.length; j++) {
            revenue += sales[i][j] * prices[j];
        }
        revenues.push(revenue);
        if (revenue > bestRevenue) {
            bestRevenue = revenue;
            bestStore = i;
        }
    }
    return {
        revenues: revenues,
        bestStore: bestStore
    };
}

const sales = [
    [10, 5, 2],
    [3, 20, 4],
    [8, 10, 1]
];
const prices = [10, 20, 50];
console.log(findBestStore(sales, prices));