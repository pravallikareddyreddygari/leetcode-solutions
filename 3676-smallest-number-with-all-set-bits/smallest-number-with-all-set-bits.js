var smallestNumber = function (n) {
    for (let p = 1; ; p = p * 2) {
        let beforePHavingAllOnes = p - 1
        if (beforePHavingAllOnes >= n) {
            return beforePHavingAllOnes
        }
    }

};