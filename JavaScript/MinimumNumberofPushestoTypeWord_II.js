const minimumPushes = function (word) {
  const n = word.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(word[i], (map.get(word[i]) || 0) + 1);
  }

  const frequencies = Array.from(map.values()).sort((a, b) => b - a);

  let cost = 0;

  for (let i = 0; i < frequencies.length; i++) {
    cost += frequencies[i] * (Math.floor(i / 8) + 1);
  }
  return cost;
};

minimumPushes("aabbccddeeffgghhiiiiii");
