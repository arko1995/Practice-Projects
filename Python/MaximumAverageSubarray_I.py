class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        window_sum = sum(nums[:k])
        maxAverage = window_sum

        for i in range(k, len(nums)):
            window_sum += nums[i]
            window_sum -= nums[i - k]
            maxAverage = max(maxAverage, window_sum)

        return maxAverage / k


solution = Solution()

print(solution.findMaxAverage([1, 12, -5, -6, 50, 3], 4))
