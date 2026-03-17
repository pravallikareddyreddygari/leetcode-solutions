var removeElement = function (a, removeVal) {
    let start = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== removeVal) {
            a[start++] = a[i];
        }
    }

    return start;
};

var removeElement222222 = function (a, removeVal) {
    let b = a.filter((x) => x !== removeVal);

    for (let i = 0; i < b.length; i++) {
        a[i] = b[i];
    }

    return b.length;
};