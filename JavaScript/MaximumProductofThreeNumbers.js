var maximumProduct = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const ans = Math.max(
    nums[n - 1] * nums[n - 2] * nums[n - 3],
    nums[n - 1] * nums[0] * nums[1],
  );

  return ans;
};

maximumProduct([1, 2, 3, 4]);
