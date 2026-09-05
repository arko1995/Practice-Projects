class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)
        suffixMin = [0] * n
        suffixMin[n - 1] = nums[n - 1]

        for i in range(n - 2, -1, -1):
            suffixMin[i] = min(nums[i], suffixMin[i + 1])

        prefixMax = float("-inf")

        for i in range(0, n):
            prefixMax = max(prefixMax, nums[i])

            if prefixMax - suffixMin[i] <= k:
                return i
        return -1


solution = Solution()

solution.firstStableIndex([5, 0, 1, 4], 3)
