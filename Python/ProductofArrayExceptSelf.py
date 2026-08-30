class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        answer = [1]*len(nums)

        left = 1
        for i in range(0,len(nums)):
            answer[i] = left
            left *= nums[i]

        right = 1
        for j in range(len(nums)-1,-1,-1):
            answer[j] *= right
            right *= nums[j]

        return answer


solution = Solution()

solution.productExceptSelf([1,2,3,4])