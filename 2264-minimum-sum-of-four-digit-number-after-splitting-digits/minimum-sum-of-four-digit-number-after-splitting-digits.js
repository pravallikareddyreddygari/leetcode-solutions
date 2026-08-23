var minimumSum = function (num) {
    let arr = (num + "")
        .split("")
        .map((x) => +x)
        .sort((a, b) => a - b);
    let new1 = arr[0] + "" + arr[2];
    let new2 = arr[1] + "" + arr[3];
    return +new1 + +new2;
};