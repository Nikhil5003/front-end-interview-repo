// localstorage with expiry
window.myLocalStorage = {
  getItem(key) {
    const result = JSON.parse(window.localStorage.getItem(key));
    if (result) {
      if (result.expiryTime <= Date.now()) {
        window.localStorage.removeItem(key);
        return null;
      }
      return result.data;
    }
    return null;
  },
  setItem(key, value, expiryTime = 2000) {
    let result = {
      data: value,
    };
    if (expiryTime) {
      result.expiryTime = Date.now() + expiryTime;
    }
    window.localStorage.setItem(key, JSON.stringify(result));
  },
  removeItem: (key) => {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};
