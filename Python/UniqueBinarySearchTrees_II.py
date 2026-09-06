from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def generateTrees(self, n: int) -> list[Optional[TreeNode]]:
        if n == 0:
            return []

        memo = dict()

        def build(start, end):

            key = f"{start}={end}"

            if key in memo:
                return memo.get(key)

            trees = []

            if start > end:
                trees.append(None)
                return trees

            for root in range(start, end + 1):
                leftTrees = build(start, root - 1)
                rightTrees = build(root + 1, end)

                for left in leftTrees:
                    for right in rightTrees:
                        node = TreeNode(root)
                        node.left = left
                        node.right = right
                        trees.append(node)

            memo.setdefault(key, trees)
            return trees

        return build(1, n)
