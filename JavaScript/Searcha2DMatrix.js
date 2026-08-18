const searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let left = 0;
  let right = rows * columns - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const row = Math.floor(mid / columns);
    const column = mid % columns;

    const value = matrix[row][column];

    if (value === target) return true;
    else if (value < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3,
);
