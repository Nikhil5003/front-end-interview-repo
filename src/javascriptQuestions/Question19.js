// test case https://cdn.bfe.dev/bfe/img/I8ncH1ncdGaBXV3nwPH061w1MmdqNR9p_1169x546_1597852405395.png

// solution

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
export function nextRightSibling(root, target) {
  if (!root) {
    return null;
  }
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const front = queue.shift();
    if (front === target) {
      return queue.shift() ?? null;
    }
    if (front) {
      for (const ele of front?.children) {
        queue.push(ele);
      }
    }
  }
}
