const cl = console.log
var maximumProduct = function (nums) {
    let n = nums.length
    nums.sort((a, b) => a - b)
    let product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]
    cl(product1)
    let product2 = nums[0] * nums[1] * nums[n - 1]
    cl(product2)
    return Math.max(product1, product2)
}