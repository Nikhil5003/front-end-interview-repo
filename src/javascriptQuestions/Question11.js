// Implement a function in JavaScript that retries promises N number of times with a delay between each call.

const wait = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

export async function retryPromise(
  asyncFn,
  retries = 5,
  delay = 50,
  finalError = "failed"
) {
  return new Promise((resolve, reject) => {
    return asyncFn()
      .then((res) => {
        resolve(res);
      })
      .catch(async () => {
        if (retries === 0) {
          reject(finalError);
        } else if (retries > 0) {
          await wait(delay);
          return retryPromise(asyncFn, retries - 1, delay, finalError)
            .then(resolve)
            .catch(reject);
        }
      });
  });
}

export async function retryPromise2(
  asyncFn,
  retries = 5,
  delay = 50,
  finalError = "failed"
) {
  try {
    const result = await asyncFn();
    return result;
  } catch {
    if (retries <= 0) {
      return Promise.reject(finalError);
    }
    await wait(5000);
    return retryPromise2(asyncFn, retries - 1, delay, finalError);
  }
}
