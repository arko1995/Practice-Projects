const threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const target = -nums[i];
    const set = new Set();

    if (i >= 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      let x = nums[j];
      let y = target - x;

      if (set.has(y)) {
        result.push([nums[i], x, y]);

        while (j + 1 < n && nums[j] === nums[j + 1]) {
          j++;
        }
      }
      set.add(x);
    }
  }

  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
