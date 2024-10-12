export const fetchWithTimeOut = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const { signal } = controller;
    let timerId = null;
    fetch(url, { signal })
      .then((res) => res.json)
      .then((data) => {
        clearTimeout(timerId);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });

    setTimeout(() => {
      console.log("aborted");
      controller.abort();
    }, duration);
  });
};
