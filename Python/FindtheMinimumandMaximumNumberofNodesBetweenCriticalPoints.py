class ListNode:
    def __init__(self, val = 0, next=None):
        self.val = val
        self.next = next

class Solution:
    def nodesBetweenCriticalPoints(self, head: ListNode | None  ) -> list[int]:
        prev = head
        cur = head.next
        index = 1

        firstCritical = -1
        prevCritical = -1

        minDistance = float('inf')
        maxDistance = -1

        while cur and cur.next:
            next = cur.next

            isCritical = (cur.val < prev.val and cur.val < next.val) or (cur.val > prev.val and cur.val > next.val)

            if isCritical:
                if firstCritical == -1:
                    firstCritical = index
                else:

                    minDistance = min(minDistance, index - prevCritical)
                    maxDistance = index - firstCritical
                prevCritical = index

            prev = cur
            cur = cur.next
            index += 1

        if maxDistance == -1:
            return [-1,-1]

        return [minDistance,maxDistance]