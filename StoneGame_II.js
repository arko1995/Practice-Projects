const stoneGameII = function (piles) {
  const n = piles.length;

  const suffix = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = piles[i] + suffix[i + 1];
  }

  const memo = Array.from({ length: n }, () => new Array(n + 1).fill(-1));

  function solve(i, M) {
    if (i >= n) return 0;

    if (memo[i][M] !== -1) {
      return memo[i][M];
    }

    let best = 0;

    for (let X = 1; X <= 2 * M && i + X <= n; X++) {
      const opponent = solve(i + X, Math.max(M, X));

      const myStone = suffix[i] - opponent;

      best = Math.max(best, myStone);
    }
    memo[i][M] = best;
    return best;
  }

  return solve(0, 1);
};

stoneGameII([2, 7, 9, 4, 4]);
