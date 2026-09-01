function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var nodesBetweenCriticalPoints = function (head) {
  let prev = head;
  let cur = head.next;

  let index = 1;

  let firstCritical = -1;
  let prevCritical = -1;

  let minDistance = Infinity;
  let maxDistance = -1;

  while (cur && cur.next) {
    let next = cur.next;

    let isCritical =
      (cur.val < prev.val && cur.val < next.val) ||
      (cur.val > prev.val && cur.val > next.val);

    if (isCritical) {
      if (firstCritical === -1) {
        firstCritical = index;
      } else {
        minDistance = Math.min(minDistance, index - prevCritical);
        maxDistance = index - firstCritical;
      }

      prevCritical = index;
    }
    prev = cur;
    cur = cur.next;
    index++;
  }

  if (maxDistance === -1) return [-1, -1];

  return [minDistance, maxDistance];
};

nodesBetweenCriticalPoints([5, 3, 1, 2, 5, 1, 2]);
