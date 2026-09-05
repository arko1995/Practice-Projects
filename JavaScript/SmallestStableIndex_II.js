var firstStableIndex = function (nums, k) {
  const n = nums.length;
  const suffixMin = Array(n);

  suffixMin[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  let prefixSum = -Infinity;

  for (let i = 0; i < n; i++) {
    prefixSum = Math.max(prefixSum, nums[i]);

    if (prefixSum - suffixMin[i] <= k) return i;
  }
  return -1;
};

console.log(firstStableIndex([5, 0, 1, 4], 3));
