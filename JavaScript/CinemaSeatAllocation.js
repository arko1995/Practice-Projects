const maxNumberOfFamilies = function (n, reservedSeats) {
  const rows = new Map();

  for (let [row, seat] of reservedSeats) {
    if (seat === 1 || seat === 10) continue;

    if (!rows.has(row)) {
      rows.set(row, new Set());
    }
    rows.get(row).add(seat);
  }

  let numberOfFamilies = (n - rows.size) * 2;

  for (let reserved of rows.values()) {
    const leftAvailable =
      !reserved.has(2) &&
      !reserved.has(3) &&
      !reserved.has(4) &&
      !reserved.has(5);

    const midAvailable =
      !reserved.has(4) &&
      !reserved.has(5) &&
      !reserved.has(6) &&
      !reserved.has(7);

    const rightAvailable =
      !reserved.has(6) &&
      !reserved.has(7) &&
      !reserved.has(8) &&
      !reserved.has(9);

    if (leftAvailable && rightAvailable) {
      numberOfFamilies += 2;
    } else if (leftAvailable || midAvailable || rightAvailable)
      numberOfFamilies += 1;
  }

  return numberOfFamilies;
};

maxNumberOfFamilies(3, [
  [1, 2],
  [1, 3],
  [1, 8],
  [2, 6],
  [3, 1],
  [3, 10],
]);
