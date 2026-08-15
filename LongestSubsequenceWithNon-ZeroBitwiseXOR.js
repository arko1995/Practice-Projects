const longestSubsequence = function (nums) {
  const xor = nums.reduce((a, b) => a ^ b, 0);

  let hasNonZero = false;

  for (let num of nums) {
    if (num !== 0) {
      hasNonZero = true;
    }
  }

  if (xor !== 0) {
    return nums.length;
  }

  if (!hasNonZero) return 0;

  return nums.length - 1;
};

longestSubsequence([1, 2, 3]);
