var distinctDifferenceArray = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let prefixCount = new Set(nums.slice(0, i + 1)).size
        let suffixCount = new Set(nums.slice(i + 1)).size
        res.push(prefixCount - suffixCount)
    }
    return res
};