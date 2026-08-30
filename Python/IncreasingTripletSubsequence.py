class Solution:
    def increasingTriplet(self, nums: list[int]) -> bool:
        first = float('inf')
        second = float('inf')

        for n in nums:
            if n<=first: 
                first = n
            elif n<=second:
                second = n
            else: return True
        return False


solution = Solution()

solution.increasingTriplet([1,2,3,4,5])