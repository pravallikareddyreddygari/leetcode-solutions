var getSneakyNumbers = function (a) {
    let ans = []

    let set = new Set()
    for (let x of a) {
        if (set.has(x)) {
            // already exists in set
            ans.push(x)
        } else {
            // new element
            set.add(x)
        }
    }
    return ans
};