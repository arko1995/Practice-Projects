var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let nodes = 2; nodes <= n; nodes++) {
    for (let root = 1; root <= nodes; root++) {
      const left = root - 1;
      const right = nodes - root;

      dp[nodes] += dp[left] * dp[right];
    }
  }

  return dp[n];
};
numTrees(3);
