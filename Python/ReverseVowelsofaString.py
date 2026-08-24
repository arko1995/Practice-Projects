class Solution:
    def reverseVowels(self, s: str) -> str:

        vowels = ["a","e","i","o","u","A","E","I","O","U"]

        left = 0
        right = len(s)-1
        s = list(s)

        while left <= right:

            if s[left] not in vowels:
                    left += 1
                    continue
            if s[right] not in vowels:
                    right -= 1
                    continue
            
            [s[left], s[right]] = [s[right], s[left]]
            left += 1
            right -= 1

        return "".join(s)


solution = Solution()

solution.reverseVowels("IceCreAm")