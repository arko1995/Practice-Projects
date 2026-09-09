from functools import reduce


class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:

        maxAverage = float("-inf")

        for i in range(0, len(nums) - k + 1):
            j = i + k
            total = reduce(lambda x, y: x + y, nums[i:j])

            maxAverage = max(maxAverage, total)

        return maxAverage / k


solution = Solution()

print(solution.findMaxAverage([1, 12, -5, -6, 50, 3], 4))
