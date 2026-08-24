from typing import List
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        result = [False] * len(candies)
        maxCandy = max(candies)

        for i in range(0, len(candies)):
            if candies[i]+extraCandies >= maxCandy:
                result[i] = True

        return result


solution = Solution()

solution.kidsWithCandies([2,3,5,1,3], 3)