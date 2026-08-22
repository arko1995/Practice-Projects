from functools import reduce

class Solution:
    def checkDivisibility(self, n: int) -> bool:
        digits = list(str(n))

        digitsSum = reduce(lambda acc, cur: acc + int(cur), digits, 0)
        digitsProduct = reduce(lambda acc, cur: acc * int(cur), digits, 1)

        sum = digitsSum + digitsProduct

        if n % sum == 0: return True
        else: return False

        
solution = Solution()


solution.checkDivisibility(99)

