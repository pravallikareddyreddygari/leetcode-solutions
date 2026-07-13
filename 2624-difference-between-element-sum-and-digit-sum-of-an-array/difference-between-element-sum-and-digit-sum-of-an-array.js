var differenceOfSum = function(nums) {
    let elementsum=0
    let digitsum=0
    for(let num of nums){
        elementsum+=num
    let temp=num
    while(temp>0){
            digitsum += temp % 10;
            temp = Math.floor(temp / 10);

    }       
}
return Math.abs(elementsum-digitsum)
};