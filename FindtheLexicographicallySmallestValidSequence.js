const validSequence = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;

  const last = new Array(m).fill(-1);

  let i = n - 1;
  let j = m - 1;

  while (i >= 0 && j >= 0) {
    if (word1[i] === word2[j]) {
      last[j] = i;
      j--;
    }
    i--;
  }

  let ans = [];

  j = 0;

  let usedMismatch = false;

  for (i = 0; i < n && j < m; i++) {
    if (word1[i] === word2[j]) {
      ans.push(i);
      j++;
    } else if (!usedMismatch && (j === m - 1 || i < last[j + 1])) {
      ans.push(i);
      usedMismatch = false;
      j++;
    }
  }

  return j === m ? ans : [];
};

validSequence("vbcca", "abc");
