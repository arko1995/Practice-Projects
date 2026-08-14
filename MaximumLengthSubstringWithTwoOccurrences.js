const maximumLengthSubstring = function (s) {
  let left = 0;

  let chars = new Map();

  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    chars.set(s[right], (chars.get(s[right]) || 0) + 1);

    while (chars.get(s[right]) > 2) {
      chars.set(s[left], chars.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

maximumLengthSubstring("bcbbbcba");
