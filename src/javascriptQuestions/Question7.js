export const calculator = {
  total: 0,
  add: function (val) {
    this.total += val;
    return this;
  },
  subtract: function (val) {
    this.total -= val;
    return this;
  },
  divide: function (val) {
    this.total /= val;
    return this;
  },
  multiply: function (val) {
    this.total *= val;
    return this;
  },
  final() {
    return this.total;
  },
};

export const ComputeAmount = function () {
  this.store = 0;

  this.crore = function (val) {
    this.store += val * Math.pow(10, 7);
    return this;
  };

  this.lacs = function (val) {
    this.store += val * Math.pow(10, 5);
    return this;
  };

  this.thousand = function (val) {
    this.store += val * Math.pow(10, 3);
    return this;
  };

  this.hundred = function (val) {
    this.store += val * Math.pow(10, 2);
    return this;
  };

  this.ten = function (val) {
    this.store += val * 10;
    return this;
  };

  this.unit = function (val) {
    this.store += val;
    return this;
  };

  this.value = function () {
    return this.store;
  };
};
