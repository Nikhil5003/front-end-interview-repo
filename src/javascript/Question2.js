///Implement a mapSeries async function in JavaScript that is similar to the Array.map() but returns a promise that resolves on the list of output by mapping each input through an asynchronous iteratee function or rejects it if any error occurs. The inputs are run in a sequence that is one after another.

// The asynchronous iteratee function will accept an input and a callback. The callback function will be called when the input is finished processing, the first argument of the callback will be the error flag and the second will be the result.
// Input:
// let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
//   // i am async iteratee function
//   // do async operations here

//   setTimeout(function () {
//     num = num * 2;
//     console.log(num);

//     // throw error
//     if(num === 12){
//       callback(true);
//     }else{
//       callback(null, num);
//     }

//   }, 2000);
// });

// numPromise
//   .then((result) => console.log("success:" + result))
//   .catch(() => console.log("no success"));

// Output:
// // each number will be printed after a delay of 2 seconds
// 2
// 4
// 6
// 8
// 10
// "success:2,4,6,8,10" // this will be printed immediately after last

const mapSeries = (arr, fn) => {
  return new Promise((resolve, reject) => {
    const final = arr.reduce((a, b) => {
      return a.then((val) => {
        return new Promise((res, rej) => {
          fn(b, (error, result) => {
            if (error) {
              rej(error);
            } else {
              res([...val, result]);
            }
          });
        });
      });
    }, Promise.resolve([]));
    final
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
