const guessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = guess(mid);

    if (res === -1) right = mid - 1;
    else if (res === 1) left = mid + 1;
    else return mid;
  }
};
