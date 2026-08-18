const largestInteger = function (nums, k) {
  const n = nums.length;

  const maxValue = Math.max(...nums);

  if (k === n) return maxValue;

  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  let maxVal = -1;
  for (const entry of freq) {
    const [val, freq] = entry;

    if (freq === 1) {
      maxVal = Math.max(maxVal, val);
    }
  }

  if (k === 1) {
    return maxVal;
  }
  const list = [freq.get(nums[0]), freq.get(nums[n - 1])];

  if (list[0] === 1 && list[1] === 1) {
    return Math.max(nums[0], nums[n - 1]);
  } else if (list[0] === 1) return nums[0];
  else if (list[1] === 1) return nums[n - 1];
  else return -1;
};

largestInteger([3, 9, 7, 2, 1, 7], 4);
