/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  const obj = {};
  let k = 0;
  let flagForUndefined = false;
  for (const index in arr) {
    const element = arr[index];
    if (element === undefined && flagForUndefined === false) {
      flagForUndefined = true;
      arr[k++] = undefined;
    } else if (typeof element === "object") {
      arr[k++] = element;
    } else {
      if (!obj[arr[index]]) {
        obj[arr[index]] = arr[index];
        arr[k++] = arr[index];
      } else if (obj[arr[index]] && obj[arr[index]] !== arr[index]) {
        //keys can be same as they are converyed into string
        arr[k++] = arr[index];
      }
    }
  }
  arr.length = k;
}

deduplicate([
  1,
  5,
  "b",
  5,
  1,
  undefined,
  "a",
  "a",
  "a",
  "b",
  true,
  "true",
  false,
  {},
  {},
]);

// [1,5,'b',5,1,undefined, 'a', 'a', 'a', 'b', true, 'true',false, {}, {}]

// []
