var reduce = function (nums, fn, init) {
    let res = init
    for (let x of nums) {
        res = fn(res, x)
    }
    return res

};