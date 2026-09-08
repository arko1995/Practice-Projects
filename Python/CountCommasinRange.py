class Solution:
    def countCommas(self, n: int) -> int:

        if n < 1000:
            return 0

        return n - 1000 + 1


solution = Solution()

print(solution.countCommas(1002))
