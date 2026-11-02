var isPerfectSquare = function (num) {
    for (let x = 1; x * x <= num; x++) {
        if (x * x == num) {
            return true;
        }
    }
    return false;
};