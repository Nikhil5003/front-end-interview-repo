// write a function to clear all interval in javascript
window.intervalIds = [];
const originalIntervalFn = window.setInterval;

window.setInterval = (fn, cb) => {
  const intervalId = originalIntervalFn(fn, cb);
  if (intervalId) {
    window.intervalIds.push(intervalId);
  }
  return intervalId;
};

window.clearAllTimeout = () => {
  window.intervalIds.forEach((element) => {
    if (element) {
      clearTimeout(element);
    }
  });
};
