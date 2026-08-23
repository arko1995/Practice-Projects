class Solution:
    def sumGame(self, num:str) -> bool:
        half = len(num)/2

        leftSum = 0
        rightSum = 0
        leftQuestionMark = 0
        rightQuestionMark = 0

        for i in range(0, len(num)):
            if num[i] == "?":
                if i<half:
                    leftQuestionMark += 1
                else: 
                    rightQuestionMark += 1

            else:
                if i<half: 
                    leftSum += int(num[i])
                else : rightSum += int(num[i])


        sumDiff = leftSum - rightSum
        questionDiff = leftQuestionMark - rightQuestionMark

        return sumDiff * 2 != -9*questionDiff