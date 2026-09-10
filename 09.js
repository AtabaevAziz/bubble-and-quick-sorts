class Solution {
    minMeetingRooms(start, end) {
        start.sort((a, b) => a - b);
        end.sort((a, b) => a - b);
        let i = 0;
        let j = 0;
        let rooms = 0;
        let maxRooms = 0;
        while (i < start.length) {
            if (start[i] < end[j]) {
                rooms++;
                maxRooms = Math.max(maxRooms, rooms);
                i++;
            } else {
                rooms--;
                j++;
            }
        }
        return maxRooms;
    }
}

let solution = new Solution();
let start = [0, 5, 15];
let end = [30, 10, 20];

console.log(solution.minMeetingRooms(start, end));