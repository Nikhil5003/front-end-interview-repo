// For example, let’s say you have a payment object, before making the final payment, we want to continuously add the amount. In that case, we can do the method chaining (alternative name for Builder design pattern) where we return the reference of the current object from the methods so that the methods of the same object can be used as required.

class Payment {
  constructor(currency = "₹", amount = 0) {
    this.currency = currency;
    this.amount = amount;
  }
  addVal(val) {
    this.amount = this.amount + val;
  }

  pay = function () {
    console.log(`${this.currency} ${this.amount}`);
  };
}

const pay = new Payment();
pay.addAmount(100).addAmount(200).addAmount(200).pay();
