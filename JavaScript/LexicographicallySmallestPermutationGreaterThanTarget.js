var lexGreaterPermutation = function (s, target) {
  const count = Array.from({ length: 26 }).fill(0);

  for (let ch of s) {
    count[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  for (let ch of target) {
    count[ch.charCodeAt(0) - "a".charCodeAt(0)] -= 1;
  }

  for (let i = target.length - 1; i >= 0; i--) {
    let cur = target[i].charCodeAt(0) - "a".charCodeAt(0);
    count[cur] += 1;

    if (count.some((x) => x < 0)) continue;

    let next = -1;

    for (let c = cur + 1; c < 26; c++) {
      if (count[c] !== 0) {
        next = c;
        break;
      }
    }
    if (next === -1) continue;

    count[next] -= 1;

    let ans = new Array(...target.slice(0, i));
    ans.push(String.fromCharCode(next + "a".charCodeAt(0)));

    for (let c = 0; c < 26; c++) {
      ans.push(...String.fromCharCode(c + "a".charCodeAt(0)).repeat(count[c]));
    }
    return ans.join("");
  }
  return "";
};

lexGreaterPermutation("leet", "code");
