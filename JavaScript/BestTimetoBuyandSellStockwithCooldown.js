const maxProfit = function (prices) {
  let hold = -prices[0];
  let sold = 0;
  let rest = 0;

  for (let i = 1; i < prices.length; i++) {
    let price = prices[i];

    let prevHold = hold;
    let prevSold = sold;
    let prevRest = rest;

    hold = Math.max(prevHold, prevRest - price);
    sold = prevHold + price;
    rest = Math.max(prevRest, prevSold);
  }

  return Math.max(sold, rest);
};

maxProfit([1, 2, 3, 0, 2]);
