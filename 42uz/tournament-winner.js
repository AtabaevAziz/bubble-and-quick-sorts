function tournamentWinner(competitions, results) {
    const scores = {};
    let currentWinner = "";
    scores[currentWinner] = 0;
    for (let i = 0; i < competitions.length; i++) {
        const homeTeam = competitions[i][0];
        const awayTeam = competitions[i][1];
        const winningTeam = results[i] === 1 ? homeTeam : awayTeam;
        if (!(winningTeam in scores)) {
            scores[winningTeam] = 0;
        }
        scores[winningTeam] += 3;
        if (scores[winningTeam] > scores[currentWinner]) {
            currentWinner = winningTeam;
        }
    }
    return currentWinner;
}

competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
]

const results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));