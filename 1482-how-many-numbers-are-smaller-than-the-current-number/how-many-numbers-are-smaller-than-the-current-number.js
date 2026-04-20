var smallerNumbersThanCurrent = function(nums) {
    let res=[]
    for (let cur of nums){
        let smallnum=nums.filter(x => x < cur).length
        res.push(smallnum)
    }
    return res
};