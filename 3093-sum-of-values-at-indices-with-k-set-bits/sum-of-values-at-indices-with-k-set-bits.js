function numOfSetBits(n) {
    let res = 0;
    while (n > 0) {
        if ((n & 1) === 1) {
            res++; //  last bit is set / odd number
        }
        n >>= 1;
    }
    return res;
}

var sumIndicesWithKSetBits = function (nums, k) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (numOfSetBits(i) === k) {
            sum += nums[i];
        }
    }

    return sum;
};