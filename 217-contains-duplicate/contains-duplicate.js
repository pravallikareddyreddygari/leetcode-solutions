var containsDuplicate = function (a) {
    let set = new Set()

    for (let x of a) {
        if (set.has(x)) {
            return true
        } else {
            set.add(x)
        }
    }

    return false
};