// traverese dom level by level

/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
export function flatten(root) {
  // your code here
  const result = [];
  const queue = [root];
  while (queue.length) {
    const front = queue.shift();
    if (front) {
      result.push(front);
    }
    if (front?.children?.length > 0) {
      for (const child of front.children) {
        queue.push(child);
      }
    }
  }
  return result;
}
