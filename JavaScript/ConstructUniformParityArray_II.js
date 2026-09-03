const uniformArray = function (nums1) {
  let min = Infinity;
  let hasOdd = false;

  for (let num of nums1) {
    min = Math.min(min, num);

    if (num % 2 !== 0) {
      hasOdd = true;
    }
  }

  if (min % 2 !== 0) {
    return true;
  } else {
    return !hasOdd;
  }
};

console.log(uniformArray([2, 3]));
