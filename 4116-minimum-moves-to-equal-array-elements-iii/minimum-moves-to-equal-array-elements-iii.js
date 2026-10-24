var minMoves = function (nums) {
    let maxVal = Math.max(...nums)
    let moves = 0
    for (let i = 0; i < nums.length; i++) {
        moves += maxVal-nums[i] 
    }
    return moves
} 