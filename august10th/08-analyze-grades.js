function analyzeGrades(grades) {
    let n = grades.length;
    let m = grades[0].length;
    let initialAverages = new Array(n);
    // Initial average of each student
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += grades[i][j];
        }
        initialAverages[i] = sum / m;
    }
    // Check every subject
    for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += grades[i][j];
        }
        let subjectAverage = sum / n;
        if (subjectAverage < 60) {
            for (let i = 0; i < n; i++) {
                grades[i][j] += 5;
                if (grades[i][j] > 100) {
                    grades[i][j] = 100;
                }
            }
        }
    }
    // Updated averages
    let updatedAverages = new Array(n);
    let bestStudent = 0;
    let bestAverage = -1;
    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = 0; j < m; j++) {
            sum += grades[i][j];
        }
        updatedAverages[i] = sum / m;
        if (updatedAverages[i] > bestAverage) {
            bestAverage = updatedAverages[i];
            bestStudent = i;
        }
    }
    return {
        initialAverages: initialAverages,
        updatedGrades: grades,
        updatedAverages: updatedAverages,
        bestStudent: bestStudent
    };
}

let grades = [
    [50, 70, 80],
    [55, 65, 90],
    [45, 75, 85]
];

console.log(analyzeGrades(grades));