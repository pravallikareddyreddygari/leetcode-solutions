var triangleType = function (a) {
    let types = ['none', 'equilateral', 'isosceles', 'scalene']

    a.sort((a, b) => a - b)

    let [s1, s2, s3] = a
    if (s1 + s2 <= s3) return types[0]

    let set = new Set(a)
    // [5,5,5] => { 5 }     // 1
    // [5,5,6] => { 5,6 }   // 2
    // [5,6,7] => { 5,6,7}  // 3

    return types[set.size]
};

var triangleType2222 = function (nums) {
    const [a, b, c] = nums;
    if (a + b <= c || b + c <= a || c + a <= b) return "none";
    if (a === b && b === c) return "equilateral";
    if (a === b || b === c || c === a) return "isosceles";
    return "scalene";
};