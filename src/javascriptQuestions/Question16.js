function findTags(root, res) {
  const tagName = root.tagName;
  res.push(tagName.toString().toLowerCase());
  if (root.children.length > 0) {
    for (let i = 0; i < root.children.length; i++) {
      findTags(root.children[i], res);
    }
  }
}

export function getTags(tree) {
  const res = [];
  if (!tree) return res;
  findTags(tree, res);
  return [...new Set(res)];
}
const elemetn = document.createElement("div");
getTags(elemetn);
// this is a question mentioned on the big frontend
