class Solution:
    def missingMultiple(self, nums: list[int], k: int) -> int:
        nums_set = set(nums)

        positive_int = 1
        while True:

            multiple = k*positive_int

            if multiple not in nums_set:
                return multiple
                

            positive_int += 1
           
solution  = Solution()
solution.missingMultiple([8,2,3,4,6], 2)    