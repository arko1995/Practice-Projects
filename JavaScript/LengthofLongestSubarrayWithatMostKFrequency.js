const maxSubarrayLength = function (nums, k) {
  const freq = new Map();

  let left = 0;
  let length = 0;

  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

    while (freq.get(nums[right]) > k) {
      freq.set(nums[left], freq.get(nums[left]) - 1);
      left++;
    }

    length = Math.max(length, right - left + 1);
  }

  return length;
};

maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2);
