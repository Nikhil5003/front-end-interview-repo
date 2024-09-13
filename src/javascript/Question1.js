// Implement a function in JavaScript that given an array of strings representing the domains, counts the number of occurrences of each string as a substring in the whole array and returns it.
// Input:
const URLs = [
  "www.google.com",
  "www.learnersbucket.com",
  "google.com",
  "learnersbucket.com",
  "news.learnersbucket.com",
];

// Output:
// {
//   "www.google.com": 1,
//   "www.learnersbucket.com": 1,
//   "google.com": 2,
//   "learnersbucket.com": 3,
//   "news.learnersbucket.com": 1
// }
//first solution
function countOccurences(array) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    for (let j = 0; j < array.length; i++) {
      if (array[j].includes(array[i] && j !== i)) {
        count++;
      }
    }
    result[array[i]] = count;
  }
  return result;
}

console.log(countOccurences(URLs));
//second solution
export const aggregate = URLs.reduce((acc, currStr, index, array) => {
  // to track the count of occurrences of the current string
  let count = 0;

  // check if the current string is a substring
  // of any of the strings in the given URL array
  // use the Boolean method to convert the boolean value to numerical.
  // 1 for true and 0 for false
  array.forEach((url) => (count += Boolean(url.includes(currStr))));

  // update the count for the string
  acc[currStr] = count;

  // return the object
  return acc;
}, {});
