const smallestNumber = function (n, t) {
  function divisible(number, t) {
    if (number < n) return;

    const original = number;
    let digits = [];

    while (number > 0) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }

    let product = digits.reduce((a, b) => a * b);

    if (product % t === 0) {
      return original;
    } else {
      return divisible(original + 1, t);
    }
  }

  return divisible(n, t);
};
smallestNumber(15, 3);
