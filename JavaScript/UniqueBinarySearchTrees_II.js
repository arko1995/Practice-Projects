function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const generateTrees = function (n) {
  if (n === 0) return [];

  const memo = new Map();

  function build(start, end) {
    const key = `${start}-${end}`;

    if (memo.has(key)) return memo.get(key);

    const tree = [];

    if (start > end) {
      tree.push(null);
      return tree;
    }

    for (let root = start; root <= end; root++) {
      const leftTrees = build(start, root - 1);
      const rightTrees = build(root + 1, end);

      for (let left of leftTrees) {
        for (let right of rightTrees) {
          const node = new TreeNode(root);
          node.left = left;
          node.right = right;
          tree.push(node);
        }
      }
    }
    memo.set(key, tree);
    return tree;
  }
  return build(1, n);
};
