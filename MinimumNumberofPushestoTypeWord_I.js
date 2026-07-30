var minimumPushes = function (word) {
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    let pushes = Math.floor(i / 8) + 1;

    answer += pushes;
  }
  return answer;
};

minimumPushes("xycdefghij");
