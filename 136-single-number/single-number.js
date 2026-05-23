const cl = console.log;
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
        cl(res);
    }
    return res;
};