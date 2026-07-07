var subsetXORSum = function (nums) {
        let bitwiseOR = 0
        for (let num of nums) {
            bitwiseOR |= num;
        }
        const sum = bitwiseOR << (nums.length - 1);
        return sum;
    };