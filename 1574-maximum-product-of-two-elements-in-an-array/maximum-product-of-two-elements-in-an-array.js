var maxProduct = function (nums) {
    nums.sort((a, b) => b - a)
    let firstmax = nums[0];
    let secondmax = nums[1];
    return (firstmax - 1) * (secondmax - 1);
};