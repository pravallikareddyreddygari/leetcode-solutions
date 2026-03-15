var containsNearbyDuplicate = function (a, k) {
    let n = a.length
    let set = new Set()

    for (let i = 0; i < n; i++) {
        // found - done
        if (set.has(a[i])) return true

        // add new value
        set.add(a[i])

        // delete old value - prev element - k distance away
        if (i - k >= 0) {
            set.delete(a[i - k])
        }
    }
    return false
}