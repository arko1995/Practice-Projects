class Solution:
    def maxArea(self, height: list[int]) -> int:
        left = 0
        right = len(height) - 1

        maxWater = 0

        while left < right:

            maxHeight = min(height[left], height[right])
            width = right - left

            maxWater = max(maxHeight * width, maxWater)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return maxWater


solution = Solution()

print(solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
