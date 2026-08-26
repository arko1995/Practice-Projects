class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        result = ""

        for i in range(0, len(s)):
            ones = 0

            for j in range(i, len(s)):
                if s[j] == "1": ones += 1

                if ones == k:
                    substring = s[i:j+1]

                    if result == "" or len(substring) < len(result) or (len(substring) == len(result) and substring < result):
                        result = substring

                    break

        return result

solution = Solution()

print(solution.shortestBeautifulSubstring("100011001", 3))