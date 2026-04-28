var findClosest = function (x, y, z) {
    let person1 = Math.abs(z - x)
    let person2 = Math.abs(z - y)
    if (person1 < person2) {
        return 1
    } else if (person2 < person1) {
        return 2
    } else {
        return 0
    }

};