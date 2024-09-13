// //normal function
// sum(1, 2, 3)
// //should return 6

// //currying function
// sum(1)(2)(3)
// //should return 6

const fn = (a, b, c) => {
  return a + b + c;
};

export function curriedFunction(fn) {
  const length = fn.length;
  return function curriedFunction(...args) {
    if (args.length >= length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      };
    }
  };
}

const curriedSum = curriedFunction(fn);
console.log(curriedSum(1)(2, 3));
