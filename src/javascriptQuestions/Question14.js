// how to make any thing sleep
export const sleep = (wait, delay) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
};
