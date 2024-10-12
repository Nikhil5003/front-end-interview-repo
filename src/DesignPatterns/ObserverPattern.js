export class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribe.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((ele) => ele !== fn);
  }

  notify(data) {
    this.subscribers.forEach((callback) => callback(data));
  }
}
