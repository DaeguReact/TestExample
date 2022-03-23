function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let answer = true;

var isSymmetric = function (root) {
  answer = true;
  const left = root.left;
  const right = root.right;
  if (!(left || right)) {
    return true;
  } else if ((!left && right) || (left && !right)) {
    return false;
  }
  explore(left, right);
  return answer;
};

const explore = (left, right) => {
  if (left.left && right.right) {
    explore(left.left, right.right);
  } else if ((left.left && !right.right) || (!left.left && right.right)) {
    answer = false;
  }

  if (left.val !== right.val) answer = false;

  if (left.right && right.left) {
    explore(left.right, right.left);
  } else if ((left.right && !right.left) || (!left.right && right.left)) {
    answer = false;
  }
};

const explore_left = (node, disk) => {
  if (node.left) {
    explore_left(node.left, disk);
  } else {
    disk.push(null);
  }
  disk.push(node.val);
  if (node.right) {
    explore_left(node.right, disk);
  } else {
    disk.push(null);
  }
};

const explore_right = (node, disk) => {
  if (node.right) {
    explore_right(node.right, disk);
  } else {
    disk.push(null);
  }
  disk.push(node.val);
  if (node.left) {
    explore_right(node.left, disk);
  } else {
    disk.push(null);
  }
};

console.log(
  isSymmetric(
    new TreeNode(
      1,
      // new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)),
      // new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null))
      // new TreeNode(2, new TreeNode(2, null, null), null),
      // new TreeNode(2, new TreeNode(2, null, null))
      new TreeNode(3, null, new TreeNode(5, null, null)),
      new TreeNode(3, new TreeNode(5, null, null), new TreeNode(4, null, null))
    )
  )
);
