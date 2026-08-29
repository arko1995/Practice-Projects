const lexPalindromicPermutation = function (s, target) {
  const freq = new Array(26).fill(0);

  for (let ch of s) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  let oddCount = 0;

  freq.forEach((val) => {
    if (val % 2 === 1) {
      oddCount++;
    }
  });

  if (oddCount !== s.length % 2) {
    return "";
  }

  const halfFreq = freq.map((count) => Math.floor(count / 2));

  let middle = "";

  if (s.length % 2 === 1) {
    for (let i = 0; i < freq.length; i++) {
      if (freq[i] % 2 === 1) {
        middle = String.fromCharCode(i + 97);
        break;
      }
    }
  }

  const halfLength = Math.floor(s.length / 2);
  const targetHalf = target.slice(0, halfLength);

  function makePalindrome(left) {
    const reversed = left.split("").reverse().join("");
    return left + middle + reversed;
  }

  function buildSmallestSuffix(counts) {
    let result = "";

    for (let i = 0; i < 26; i++) {
      result += String.fromCharCode(i + 97).repeat(counts[i]);
    }
    return result;
  }

  const available = [...halfFreq];
  let canMatch = true;

  for (let ch of targetHalf) {
    const index = ch.charCodeAt(0) - 97;

    if (available[index] === 0) {
      canMatch = false;
      break;
    }

    available[index]--;
  }

  if (canMatch) {
    const candidate = makePalindrome(targetHalf);

    if (candidate > target) return candidate;
  }

  function getNextHalf(halfFreq, targetHalf) {
    const counts = [...halfFreq];

    const prefix = [];

    for (let i = 0; i < targetHalf.length; i++) {
      const targetIndex = targetHalf.charCodeAt(i) - 97;

      if (counts[targetIndex] > 0) {
        counts[targetIndex]--;
        prefix.push(targetIndex);
        continue;
      }
      for (let c = targetIndex + 1; c < 26; c++) {
        if (counts[c] > 0) {
          counts[c]--;

          const left =
            prefix.map((x) => String.fromCharCode(x + 97)).join("") +
            String.fromCharCode(c + 97) +
            buildSmallestSuffix(counts);

          return left;
        }
      }

      for (let k = i - 1; k >= 0; k--) {
        const restored = prefix.pop();
        counts[restored]++;

        const targetATK = targetHalf.charCodeAt(k) - 97;

        for (let c = targetATK + 1; c < 26; c++) {
          if (counts[c] > 0) {
            counts[c]--;

            const left =
              prefix.map((x) => String.fromCharCode(x + 97)).join("") +
              String.fromCharCode(c + 97) +
              buildSmallestSuffix(counts);

            return left;
          }
        }
      }
      return "";
    }

    for (let k = targetHalf.length - 1; k >= 0; k--) {
      const restored = prefix.pop();
      counts[restored]++;
      const targetATK = targetHalf.charCodeAt(k) - 97;

      for (let c = targetATK + 1; c < 26; c++) {
        if (counts[c] > 0) {
          counts[c]--;

          const left =
            prefix.map((x) => String.fromCharCode(x + 97)).join("") +
            String.fromCharCode(c + 97) +
            buildSmallestSuffix(counts);

          return left;
        }
      }
    }
    return "";
  }

  const nextHalf = getNextHalf(halfFreq, targetHalf);

  if (nextHalf === "") return "";

  return makePalindrome(nextHalf);
};
lexPalindromicPermutation("aaabb", "ababa");
