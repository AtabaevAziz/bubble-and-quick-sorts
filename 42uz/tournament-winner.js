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

console.log(tournamentWinner([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
