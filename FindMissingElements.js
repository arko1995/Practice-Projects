const findMissingElements = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  const ans = [];

  for (let i = min; i < max; i++) {
    if (!nums.includes(i)) ans.push(i);
  }

  return ans.sort((a, b) => a - b);
};

findMissingElements([5, 1]);
