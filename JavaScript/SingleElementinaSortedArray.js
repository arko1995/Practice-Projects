const singleNonDuplicate = function (nums) {
  const n = nums.length;

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) mid--;

    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);
