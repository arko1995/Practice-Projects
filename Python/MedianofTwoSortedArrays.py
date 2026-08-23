import math
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if(len(nums1) > len(nums2)): return self.findMedianSortedArrays(nums2, nums1)

        m = len(nums1)
        n = len(nums2)

        left = 0
        right = m

        while left <= right:

            cut1 = math.floor((left+right)/2)
            cut2 = (math.floor((m+n+1)/2)) - cut1

            Aleft = float('-inf') if cut1 == 0 else nums1[cut1-1]
            Aright = float("inf") if cut1 == m else nums1[cut1]

            Bleft = float('-inf') if cut2 == 0 else nums2[cut2-1]
            Bright = float('inf') if cut2 == n else nums2[cut2]

            if Aleft <= Bright and Bleft <= Aright:
                if (m+n) % 2 == 1: 
                    return max(Aleft, Bleft)
                return (max(Aleft,Bleft)+ min(Aright, Bright))/2

            if Aleft > Bright:
                right = cut1-1
            else: left = cut1+1


solution = Solution()