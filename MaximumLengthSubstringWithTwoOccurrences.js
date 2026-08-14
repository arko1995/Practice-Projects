const maximumLengthSubstring = function (s) {
  let left = 0;

  let chars = new Set();

  let maxLength = 0;

  for (let right = 1; right < s.length; right++) {
    while (chars.has(s[right])) {
      chars.delete(s[left]);
      left++;
    }

    chars.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

maximumLengthSubstring("bcbbbcba");
