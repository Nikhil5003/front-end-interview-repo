export const filterObject = (arr, filter) => {
  // if the value of the filter is a string
  // check in the values of the object
  if (typeof filter === "string") {
    for (const entry of arr) {
      // traverse each entry and check on value
      for (const [, val] of Object.entries(entry)) {
        if (val === filter) {
          return entry;
        }
      }
    }
  }
  // if filter is number and can be accessed in arr
  else if (filter in arr) {
    return arr[filter];
  }
  // if nothing is found
  else {
    return undefined;
  }
};
