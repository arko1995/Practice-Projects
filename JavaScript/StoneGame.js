const stoneGame = function (piles) {
  let alice = 0;

  const map = new Map();

  function stones(left, right) {
    const key = `${left},${right}`;

    if (map.has(key)) {
      return map.get(key);
    }

    if (left === right) return piles[left];

    const chooseLeftStone = piles[left] - stones(left + 1, right);

    const chooseRightStone = piles[right] - stones(left, right - 1);

    const advantage = Math.max(chooseLeftStone, chooseRightStone);

    map.set(key, advantage);

    return advantage;
  }

  alice += stones(0, piles.length - 1);

  return alice >= 0;
};
