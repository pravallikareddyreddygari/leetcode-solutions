var smallestEvenMultiple = function (n) {
    for (let i = 1; ; i++) {
        if (
            (i % 2 === 0) && // i is multiple of 2
            (i % n === 0) //    i is multiple of n
        ) {
            return i
        }
    }
};