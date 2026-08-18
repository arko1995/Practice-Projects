const maxProduct = function (nums) {
  nums.sort((a, b) => a - b);

  const answer = (nums.at(-1) - 1) * (nums.at(-2) - 1);

  return answer;
};
maxProduct([3, 4, 5, 2]);
