var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    let moves = 0
    while (seats.length) {
        moves += Math.abs(seats.pop() - students.pop())
    }
    return moves
};