class Solution:
    def uniformArray(self, nums1: list[int]) -> bool:

        min_val = float("inf")
        hasOdd = False

        for num in nums1:
            min_val = min(min_val, num)

            if num % 2 != 0:
                hasOdd = True

        if min_val % 2 != 0:
            return True
        else:
            return not hasOdd


solution = Solution()

print(solution.uniformArray([1, 4, 7]))
