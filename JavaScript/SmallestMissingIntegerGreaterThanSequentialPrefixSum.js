const missingInteger = function (nums) {
  const n = nums.length;

  let sum = nums[0];

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1] + 1) break;
    sum += nums[i];
  }

  while (nums.includes(sum)) {
    sum++;
  }
  return sum;
};

missingInteger([1, 2, 3, 2, 5]);
