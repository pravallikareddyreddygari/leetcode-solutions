var minOperations = function(nums, k) {
       let sum= nums.reduce((a,b)=>a+b,0)
        return sum % k
};