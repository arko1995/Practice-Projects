const findClosestElements = function (arr, k, x) {
  const n = arr.length;
  let left = 0;
  let right = n - k;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr.slice(left, left + k);
};

findClosestElements([1, 1, 2, 3, 4, 5], 4, -1);
