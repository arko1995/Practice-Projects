const smallestNumber = function (num, t) {
  const factors = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [3, 0, 0, 0],
    [0, 2, 0, 0],
  ];

  let x = BigInt(t);

  const target = [0, 0, 0, 0];
  const primes = [2n, 3n, 5n, 7n];

  for (let i = 0; i < 4; i++) {
    while (x % primes[i] === 0n) {
      target[i]++;
      x /= primes[i];
    }
  }

  if (x !== 1n) {
    return "-1";
  }

  const useDigit = (state, d) => {
    return [
      Math.max(0, state[0] - factors[d][0]),
      Math.max(0, state[1] - factors[d][1]),
      Math.max(0, state[2] - factors[d][2]),
      Math.max(0, state[3] - factors[d][3]),
    ];
  };

  const done = (state) => {
    return state[0] === 0 && state[1] === 0 && state[2] === 0 && state[3] === 0;
  };

  const memo = new Map();

  const minNeed = (state) => {
    if (done(state)) return 0;

    const key = state.join(",");

    if (memo.has(key)) return memo.get(key);

    let best = Infinity;

    for (let d = 2; d <= 9; d++) {
      const next = useDigit(state, d);

      if (
        next[0] === state[0] &&
        next[1] === state[1] &&
        next[2] === state[2] &&
        next[3] === state[3]
      ) {
        continue;
      }
      best = Math.min(best, 1 + minNeed(next));
    }
    memo.set(key, best);
    return best;
  };

  const buildSuffix = (need, len) => {
    let ans = "";

    for (let pos = 0; pos < len; pos++) {
      const positionsLeft = len - pos - 1;
      for (let d = 1; d <= 9; d++) {
        const next = useDigit(need, d);

        if (minNeed(next) <= positionsLeft) {
          ans += String(d);
          need = next;
          break;
        }
      }
    }
    return ans;
  };

  const n = num.length;

  const before = new Array(n + 1);

  before[0] = [...target];

  let firstZero = n;

  for (let i = 0; i < n; i++) {
    if (num[i] === "0") {
      firstZero = i;
      break;
    }

    const d = Number(num[i]);
    before[i + 1] = useDigit(before[i], d);
  }

  if (firstZero === n && done(before[n])) {
    return num;
  }

  let start = firstZero === n ? n - 1 : firstZero;

  for (let i = start; i >= 0; i--) {
    const needBeforeThisDigit = before[i];

    const currentDigit = Number(num[i]);

    for (let d = currentDigit + 1; d <= 9; d++) {
      const next = useDigit(needBeforeThisDigit, d);

      const suffixLength = n - i - 1;

      if (minNeed(next) <= suffixLength) {
        const prefix = num.slice(0, i);

        const suffix = buildSuffix(next, suffixLength);
        return prefix + String(d) + suffix;
      }
    }
  }

  const requiredDigits = minNeed(target);
  const newLength = Math.max(n + 1, requiredDigits);
  return buildSuffix([...target], newLength);
};
