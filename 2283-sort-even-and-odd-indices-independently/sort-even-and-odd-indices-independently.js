var sortEvenOdd = function (nums) {
    let odd = [];
    let even = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    let res = [];
    let oddIndex = 0;
    let evenIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            res.push(even[evenIndex++]);
        } else {
            res.push(odd[oddIndex++]);
        }
    }
    return res;
};