const sumGame = function (num) {
  const half = num.length / 2;

  let leftSum = 0;
  let rightSum = 0;
  let leftQuestionMark = 0;
  let rightQuestionMark = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "?") {
      if (i < half) leftQuestionMark++;
      else rightQuestionMark++;
    } else {
      if (i < half) leftSum += Number(num[i]);
      else rightSum += Number(num[i]);
    }
  }

  const sumDiff = leftSum - rightSum;
  const questionDiff = leftQuestionMark - rightQuestionMark;

  return sumDiff * 2 !== -9 * questionDiff;
};

sumGame("?3295???");
