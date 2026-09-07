class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:

        nums.sort()

        i = 0
        j = len(nums) - 1
        count = 0
        while i < j:
            total = nums[i] + nums[j]

            if total == k:
                count += 1
                i += 1
                j -= 1
            elif total > k:
                j -= 1
            else:
                i += 1

        return count


solution = Solution()
print(solution.maxOperations([1, 2, 3, 4], 5))
