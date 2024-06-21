function chopArr(arr, k) {
  // your code goes here
  let res = [];
  if (!k || k >= arr.length) return [arr];
  let j = 0;
  while (j < arr.length) {
    res.push(arr.slice(j, j + k));
    j += k;
  }
  return res;
}
