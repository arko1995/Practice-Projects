const findMin = function (nums) {
  nums = [...new Set(nums)];
  const n = nums.length;

  console.log(nums);

  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  console.log(nums[left]);

  return nums[left];
};

findMin([2, 2, 2, 0, 1]);
