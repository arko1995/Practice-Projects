class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:

        maxLength = max(len(word1), len(word2))
        result = ""

        for i in range(0, maxLength):

            if i < len(word1):
                result += word1[i]
            if i < len(word2):
                result += word2[i]

        return result
    
solution = Solution()


