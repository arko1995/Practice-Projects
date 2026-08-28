class Solution:
    def lexGreaterPermutation(self, s: str, target: str) -> str:

        count = [0] * 26

        for ch in s:
            count[ord(ch) - ord('a')] += 1

        for ch in target:
            count[ord(ch) - ord("a")] -= 1

        for i in range(len(target)-1,-1,-1):
            cur = ord(target[i]) - ord("a")
            count[cur] += 1
           

            if any(x<0 for x in count):
                continue

            next = -1

            for c in range(cur+1, 26):
                if count[c]:
                    next = c
                    break

            if next == -1:
                continue
            
            count[next] -= 1

            ans = list(target[:i])
            ans.append(chr(next + ord("a")))

            for c in range(26):
                ans.extend(chr(c+ord("a")) * count[c])

            return "".join(ans)
        return ""
solution=Solution()
solution.lexGreaterPermutation("leet", "code")