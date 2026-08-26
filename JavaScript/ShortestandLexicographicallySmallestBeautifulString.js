const shortestBeautifulSubstring = function (s, k) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let ones = 0;

    for (let j = i; j < s.length; j++) {
      if (s[j] === "1") ones++;

      if (ones === k) {
        const substring = s.slice(i, j + 1);

        if (
          result === "" ||
          substring.length < result.length ||
          (substring.length === result.length && substring < result)
        ) {
          result = substring;
        }
        break;
      }
    }
  }

  return result;
};
console.log(shortestBeautifulSubstring("100011001", 3));
