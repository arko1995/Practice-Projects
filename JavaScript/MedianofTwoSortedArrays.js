const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    const cut1 = Math.floor((left + right) / 2);

    const cut2 = Math.floor((m + n + 1) / 2) - cut1;

    const Aleft = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    const Aright = cut1 === m ? Infinity : nums1[cut1];

    const Bleft = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    const Bright = cut2 === n ? Infinity : nums2[cut2];

    if (Aleft <= Bright && Bleft <= Aright) {
      if ((m + n) % 2 === 1) return Math.max(Aleft, Bleft);

      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    }

    if (Aleft > Bright) {
      right = cut1 - 1;
    } else {
      left = cut1 + 1;
    }
  }
};

findMedianSortedArrays([1, 2], [3, 4]);
