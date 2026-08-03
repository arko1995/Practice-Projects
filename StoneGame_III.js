const stoneGameIII = function (stoneValue) {
  const memo = new Array(stoneValue.length);

  function best(i) {
    if (i >= stoneValue.length) return 0;
    if (memo[i] !== undefined) return memo[i];

    let answer = -Infinity;
    let collected = 0;

    for (let taken = 1; taken <= 3; taken++) {
      if (i + taken > stoneValue.length) break;

      collected += stoneValue[i + taken - 1];

      const advantage = collected - best(i + taken);

      answer = Math.max(answer, advantage);
    }

    memo[i] = answer;

    return answer;
  }

  const result = best(0);

  return result === 0 ? "Tie" : result > 0 ? "Alice" : "Bob";
};

stoneGameIII([1, 2, 3, 7]);
