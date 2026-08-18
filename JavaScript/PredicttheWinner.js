const predictTheWinner = function (nums) {
  const memo = new Map();

  function play(left, right) {
    const key = `${left},${right}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (left === right) {
      return nums[left];
    }

    const chooseLeft = nums[left] - play(left + 1, right);
    const chooseRight = nums[right] - play(left, right - 1);

    const bestAdvantage = Math.max(chooseLeft, chooseRight);

    memo.set(key, bestAdvantage);

    return bestAdvantage;
  }

  const player1Advantage = play(0, nums.length - 1);

  return player1Advantage >= 0;
};

predictTheWinner([1, 5, 233, 7]);
