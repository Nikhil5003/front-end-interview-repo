import axios from "axios";

export function cachedApiCall(delay) {
  let obj = {}; // Cache object to store response and time
  let initialTime = Date.now() + delay;
  return function () {
    const currentTime = Date.now();
    if (currentTime > initialTime || !obj["apiUrl"]) {
      return axios("apiUrl").then((res) => {
        obj["apiUrl"] = res;
        initialTime = currentTime + delay;
        return res;
      });
    } else {
      return new Promise((res) => res(obj["response"]));
    }
  };
}
