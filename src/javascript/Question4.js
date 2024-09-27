window.myLocalStorage = {
  getItem(key) {
    const item = JSON.parse(localStorage.getItem(key));
    if (item) {
      if (item.expiryTime) {
        if (Date.now() > item.expiryTime) {
          window.localStorage.removeItem(key);
          return null;
        }
        return item[key];
      }
      return item[key];
    }
    return null;
  },

  setItem(key, value, expiryTime) {
    let data = {};
    if (expiryTime) {
      data["expiryTime"] = Date.now() + expiryTime;
    }
    if (key && value) {
      data[key] = value;
    }
    if (expiryTime !== 0) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};
