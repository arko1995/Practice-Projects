const hIndex = function (citations) {
  const n = citations.length;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let h = n - mid;

    if (citations[mid] > h) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return n - left;
};
