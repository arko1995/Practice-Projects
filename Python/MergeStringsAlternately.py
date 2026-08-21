class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        for a,b in zip(word1, word2):
            result.extend((a,b))

        result.append(word1[len(result) //2:])
        result.append(word2[len(result) //2:])

        return "".join(result)
solution = Solution()

solution.mergeAlternately("arko", "punom")


