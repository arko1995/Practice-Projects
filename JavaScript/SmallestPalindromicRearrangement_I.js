const smallestPalindrome = function (s) {
  const freq = new Array(26).fill(0);

  for (let char of s) {
    freq[char.charCodeAt(0) - 97]++;
  }

  const left = [];
  let middle = "";

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + 97);
    const count = Math.floor(freq[i] / 2);

    if (count > 0) {
      left.push(char.repeat(count));
    }
    if (freq[i] % 2 === 1) {
      middle = char;
    }
  }

  const firstHalf = left.join("");
  let secondHalf = "";

  for (let i = firstHalf.length - 1; i >= 0; i--) {
    secondHalf += firstHalf[i];
  }

  return firstHalf + middle + secondHalf;
};

smallestPalindrome("babab");
