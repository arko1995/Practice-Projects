const checkDivisibility = function (n) {
  const digits = n.toString().split("");

  let digitsSum = digits.reduce((acc, cur) => acc + Number(cur), 0);

  let digitsProduct = digits.reduce((acc, cur) => acc * Number(cur));

  let sum = digitsSum + digitsProduct;

  if (n % sum === 0) return true;
  else return false;
};
checkDivisibility(99);
