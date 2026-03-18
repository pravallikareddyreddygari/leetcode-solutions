var leftRightDifference = function (nums) {
    const n = nums.length;
    const leftsum = new Array(n).fill(0);
    const rightsum = new Array(n).fill(0);
    const answer = new Array(n);
    for (let i = 1; i < n; i++) {
        leftsum[i] = leftsum[i - 1] + nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        rightsum[i] = rightsum[i + 1] + nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftsum[i] - rightsum[i]);
    }
    return answer;
}
