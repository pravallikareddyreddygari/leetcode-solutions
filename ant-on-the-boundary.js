var returnToBoundaryCount = function (nums) {
    let currentPos= 0
    let boundaryCross = 0

    for (let i = 0; i < nums.length; i++) {
        currentPos += nums[i]
        if (currentPos=== 0) {
            boundaryCross++
        }
    }
    
    return boundaryCross
}; 