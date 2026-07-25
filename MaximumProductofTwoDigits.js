const maxProduct = function (n) {
  const arr = [];

  while (n > 0) {
    const dig = n % 10;
    n = Math.floor(n / 10);
    arr.push(dig);
  }

  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      answer = Math.max(answer, arr[i] * arr[j]);
    }
  }
  return answer;
};

maxProduct(124);
