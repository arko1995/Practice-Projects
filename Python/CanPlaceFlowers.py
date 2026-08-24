class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        canPlant = 0

        for i in range(0, len(flowerbed)):
            leftEmpty =  i == 0 or flowerbed[i-1] == 0
            rightEmpty = i == len(flowerbed)-1 or flowerbed[i+1] == 0

            if flowerbed[i] == 0 and leftEmpty and rightEmpty:
                flowerbed[i] = 1
                canPlant += 1

        if canPlant >= n: return True
        else: return False

solution = Solution()

solution.canPlaceFlowers([1,0,0,0,1], 1)