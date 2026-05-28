var addBinary = function (a, b) {
    a = a.split('').map(x => +x);
    b = b.split('').map(x => +x);

    let res = [];
    let carry = 0;
    while (a.length || b.length || carry) {
        let total = (a.pop() ?? 0) + (b.pop() ?? 0) + carry;
        res.push(total % 2); //            0=>0, 1=>1, 0+1=>1, 1+1=>0, 1+1+1=>1
        carry = Math.trunc(total / 2); //  0+1=>0, 1+0=>0, 1+1=>1, 1+1+1=>1
    }
    return res.reverse().join('');
};