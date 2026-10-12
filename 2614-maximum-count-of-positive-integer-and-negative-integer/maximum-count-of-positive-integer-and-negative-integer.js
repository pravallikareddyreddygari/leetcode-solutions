var maximumCount = function(nums) {
    let negativeCount=0
    let positiveCount=0
    for(let i=0;i<nums.length;i++){
        if (nums[i]<0){
            negativeCount++
        }else if(nums[i]>0){
            positiveCount++
        }
    }
    return Math.max(negativeCount,positiveCount)
};