class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
            n = len(nums) 
            arr1 = [nums[0]]
            arr2 = [nums[1]]

            i = 2
            
            for i in range(2, n):

                if arr1[-1] > arr2[-1]:
                     arr1.append(nums[i])
                else:
                     arr2.append(nums[i])
                i += 1
                n -= 1

            return arr1 + arr2

    