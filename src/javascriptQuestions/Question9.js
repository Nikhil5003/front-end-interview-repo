//write a function to clear all timeout
const originalTimeout = window.setTimeout;
let timerId = [];
window.setTimeout = (fn, callback) => {
  let tid = originalTimeout(fn, callback);
  if (tid) {
    timerId.push(tid);
  }
  return tid;
};
export function clearAllTimeout() {
  // your code here
  timerId.forEach((ele) => {
    if (ele && typeof ele === "number") {
      clearTimeout(ele);
    }
  });
}

// example case
setTimeout(() => {
  console.log("hi");
}, 2000);

setTimeout(() => {
  console.log("bye");
}, 4000);

clearAllTimeout();
