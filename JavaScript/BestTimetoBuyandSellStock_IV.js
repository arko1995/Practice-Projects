const maxProfit = function (k, prices) {
  const memo = new Map();
  function best(day, transactionsRemaining, holding) {
    if (day === prices.length || transactionsRemaining === 0) return 0;

    const key = `${day}-${transactionsRemaining}-${holding}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    let profit;

    if (holding) {
      const keepHolding = best(day + 1, transactionsRemaining, true);

      const sell =
        prices[day] + best(day + 1, transactionsRemaining - 1, false);

      profit = Math.max(keepHolding, sell);
    } else {
      const skip = best(day + 1, transactionsRemaining, false);
      const buy = -prices[day] + best(day + 1, transactionsRemaining, true);

      profit = Math.max(skip, buy);
    }
    memo.set(key, profit);
    return profit;
  }

  return best(0, k, false);
};

maxProfit(2, [2, 4, 1]);
