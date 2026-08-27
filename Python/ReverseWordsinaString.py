class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.split()
        
        return " ".join(reversed(s))
    

solution = Solution()
print(solution.reverseWords("  hello world  "))
