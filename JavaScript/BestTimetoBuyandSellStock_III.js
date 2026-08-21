const maxProfit = function (prices) {
  if (!prices.every(Number.isFinite)) return 0;

  function dp(day, holding, transactionsLeft) {
    if (day === prices.length) return 0;
    if (transactionsLeft === 0) return 0;

    if (holding) {
      const skip = dp(day + 1, true, transactionsLeft);
      const sell = prices[day] + dp(day + 1, false, transactionsLeft - 1);

      return Math.max(skip, sell);
    } else {
      const skip = dp(day + 1, false, transactionsLeft);
      const buy = -prices[day] + dp(day + 1, true, transactionsLeft);

      return Math.max(skip, buy);
    }
  }

  return dp(0, false, 2);
};

maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
