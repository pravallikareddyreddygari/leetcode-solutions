var nextGreaterElement = function (nums1, nums2) {
    let n = nums1.length
    let m = nums2.length

    let firstGreatest2 = new Array(m).fill(-1)
    for (let j = m - 1; j >= 0; j--) {
        for (let i = j + 1; i < m; i++) {
            if (nums2[i] > nums2[j]) {
                firstGreatest2[j] = nums2[i]
                break
            }
        }
    }

    let res = []
    for (let i = 0; i < nums1.length; i++) {
        let x = nums1[i]
        let j = nums2.indexOf(x)
        res.push(firstGreatest2[j])
    }
    return res
};