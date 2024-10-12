// (function(){
//   var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined'));    false
// console.log("b defined? " + (typeof b !== 'undefined'));  true

const obj = {
  A: {
    B: {
      C: {
        D: 2,
      },
    },
  },
};

function readValueInsideObject(obj, str) {
  const res = str.split(".");
  let i = 0;
  function readValue(obj, res, i) {
    if (i === res.length - 1) {
      if (typeof obj[res[i]] === "number") {
        return obj[res[i]];
      } else {
        return undefined;
      }
    }
    if (typeof obj[res[i]] === "object") {
      return readValue(obj[res[i]], res, i + 1);
    } else {
      if (typeof obj[res[i]] === "number") {
        return obj[res[i]];
      }
    }
  }
  return readValue(obj, res, i);
}

console.log(readValueInsideObject(obj, "A.B.C.D.E"));
