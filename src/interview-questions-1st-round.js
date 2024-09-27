// function returnObject() {

//   const obj =  { a: 1, b: 2 };
//   return obj
// }

// const obj1 = returnObject();  // {a : 1 , b:2}
// const obj2 = returnObject(); //{ a : 1 , b : 2}
// console.log(obj1 === obj2);   //false

// function compare(obj1,obj2){
//     let keysArray1 = Object.keys(obj1).sort()
//     let keysArray2 = Object.keys(obj2).sort()
//     if(keysArray1.length !== keysArray2.length) return false
//     for(let i = 0 ; i < keysArray1.length ; i++){
//         if(keysArray1[i] !== keysArray2[i]){
//             return false
//         }
//         let keyForObj1 = keysArray1[i]
//         let keyForObj2 = keysArray2[i]
//         if(obj1[keyForObj1] !== obj2[keyForObj2]){
//             return false
//         }
//     }
//     return true
// }

// console.log(compare({a : 1 , b : 2}, {b : 2 , a : 1}))

// Function.prototype.myCall = function(obj ,...args){
//   let currentContext = obj || window
//   let key = Symbol()
//   currentContext[key] = this
//   let result = currentContext[key](...args)
//   delete currentContext[key]
//   return result
// }

// Function.prototype.myApply = function(obj ,args){
//   let currentContext = obj || window
//   let key = Symbol()
//   currentContext[key] = this
//   let result = currentContext[key](...args)
//   delete currentContext[key]
//   return result
// }

// Function.prototype.MyBind = function(obj , ...args){
//     let currentContext = obj || window
//     let key = Symbol()
//     currentContext[key] = this
//     return function(...extraArguments){
//         let result = currentContext[key](...args,...extraArguments)
//         delete currentContext[key]
//         return result
//     }
// }

// Array.prototype.myMap = function(callBackFunction){

//     let array = []
//     let length = this.length
//     for(let i = 0 ; i < length ; i++){
//         array.push(callBackFunction(this[i],i ,this))
//     }
//     return array
// }

// Array.prototype.myFilter = function(callBackFunction){

//     let array = []
//     let length = this.length
//     for(let i = 0 ; i < length ; i++){
//         if(callBackFunction(this[i],i, this)){
//             array.push(this[i])
//         }
//     }
//     return array
// }

// Array.prototype.myReduce = function(callBackFunction , accumulator){
//      if(!this.length) return accumulator
//      let startIndex = accumulator !== undefined ? 0 : 1
//      let result = accumulator !== undefined ? accumulator : this[0]
//      for(let i = startIndex ; i < this.length ; i++){
//          result = callBackFunction(result,this[i],i,this)
//      }
//      return result
// }
//  function debounce(fn,wait){
//     let timerId = null
//     return function(...args){ //same as debounce which we used from lodash
//         clearTimeout(timerId)
//         setTimeout(()=>{
//             fn.call(this,...args)
//         },wait)
//     }
// }

// const obj = {
//     a : 2,
// }

// function example(b){
//     return this.a + b
// }
// function bindExample(...args){
//     console.log(...args)
// }

// function base(arg0){ //this is example of closure
//     let value = arg0
//     return function(arg1){
//         value = value + arg1
//         return value
//     }
// }

// const baseFunction = base(10)

// console.log('======call polyfill ======')
// console.log(example.myCall(obj,3))

// console.log('======apply polyfill ======')
// console.log(example.myApply(obj,[5]))

// console.log('======bind polyfill ======')
// // console.log(bindExample.myBind(obj,3))

// console.log(' ==== map polyfill ======')
// console.log([1,2,3,4].myMap(ele => ele * 2))

// console.log('===== filter polyfill ======')
// console.log([1,10, 5, 8].myFilter(ele => ele%2 !== 0))

// console.log(' ====reduce polyfill =====')
// console.log([].myReduce((acc,ele)=> acc + ele))

// console.log('====== closure example')
// console.log(baseFunction(10))
// console.log(baseFunction(10))
// console.log(baseFunction(25))

// console.log(1);
// setTimeout(() => console.log(2),0);
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4),0));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6),0);
// console.log(7);

//output for above question

// 1
// 7
// 3
// 5
// 2
// 6
// 4

// console.log(name) //Error
// const name = 'Nikhil attri'
// for (var i = 0; i < 4; i++) {
//   setTimeout(
//     function (i) {
//       console.log(i);
//     },
//     i * 1000,i
//   );
// }

//0
//1
//2
//3

// var age = 10
// var person = {
//   name: "John",
//   age: 20,
//   getAge: function() {
//     return this.age
//   },
//   getAge2: () => {
//     return this.age
//   }
// }

// var person2 = { age: 24 }
// console.log(person.getAge.call(person2))
// console.log(person.getAge2.call(person2))

//prototype chaining is below

// const calc = {
//   a:0,
//   add(b){
//     this.a = this.a + b
//     return this
//   },
//   subtract(c){
//     this.a = this.a - c
//     return this
// },
//   getValue(){
//     console.log(this.a)
//   }
// }

// calc.add(3).add(4).subtract(2).getValue()  //5

// const obj1 = {
//   a: ['b', 'c'],
//   b: ['d', 'g'],
//   d: ['p', 'q'],
//   i: ['x', 'y']
// }

//findout all friends of including friends of friends

//for example for a person friends are // ['b', 'c', 'd', 'g', 'p', 'q']
// let result = []

// function findAllPerson(person){
//     let result = []
//     const tempArray = obj1[person]
//     if(!tempArray)return []
//     for(const friend of tempArray){
//         if(obj1[friend]){
//             result.push(...findAllPerson(friend))
//         }
//         result.push(friend)

//     }
//     return result
// }
// console.log(findAllPerson('a'))

// //this is bfs
// function findAllPerson(person){
//     let result = []
//     let visited = []
//     let queue = [person]
//     let temp = obj1[person]
//     if(!temp)return []
//     while(queue.length > 0){
//       const currentPerson =queue.shift()
//       if(!visited.includes(currentPerson)){
//           visited.push(currentPerson)
//           const friends = obj1[currentPerson]
//           if(friends){
//                 for(const friend of friends){
//                 if(!visited.includes(friend)){
//                      queue.push(friend)
//                 }

//           }
//              result.push(...friends)
//           }

//       }
//     }
//     return result

// }
// function sum(a){
//     return function(b){
//         if(!b){
//             return a
//         }
//         else{
//             return sum(a+b)
//         }
//     }
// }
// console.log(sum(10)(20)(30)(40)())
//  function promiseFunction(){
//     return new Promise((resolve)=> resolve('resolved'),5000)

// }

//  function memo(fn){
//       let cache = {}
//       return  function(...args){
//           let hashed = [...args].join('_')
//           if(cache[hashed]){
//               console.log('==== i am cached =====')
//               return cache[hashed]
//           }
//           cache[hashed] = fn(...args)
//           return cache[hashed]
//       }

// }

// const sum  = (a,b) => {
//     return a+b
// }
// const memoSum = memo(sum)
// console.log(memoSum(5,10))

// Promise.myall = function (values) {
//     return new Promise(function (resolve, reject) {
//         let result = [];
//         let total = 0;
//         values.forEach((item, index) => {
//             Promise.resolve(item).then((res) => {
//                 result[index] = res;
//                 total++;
//                 if (total === values.length)
//                     resolve(result);
//             }).
//                 catch((err) => {
//                     reject(err);
//                 })
//         })
//     })
// }

// const nestedArray = [1,[2,3],[5,7,9],[[[1,2]]]]
// //write a function to flatten the array
// function flatten(nestedArray,n = 3){
//     let result = []
//     for(let i = 0 ; i < nestedArray.length ; i++){
//         if(typeof nestedArray[i] === 'number'){

//                      result.push(nestedArray[i])

//         }
//         else{
//             let tempResult = flatten(nestedArray[i],n-1)
//             result.push(...tempResult)
//         }
//     }
//     return result.filter((ele,index,arr) => arr.indexOf(ele) === index)
// }

// console.log(flatten(nestedArray))

//Leena.ai 1st round

// function returnObject() {

//   const obj =  { a: 1, b: 2 };
//   return obj
// }

// const obj1 = returnObject();  // {a : 1 , b:2}
// const obj2 = returnObject(); //{ a : 1 , b : 2}
// console.log(obj1 === obj2);   //false

// function compare(obj1,obj2){
//     let keysArray1 = Object.keys(obj1).sort()
//     let keysArray2 = Object.keys(obj2).sort()
//     if(keysArray1.length !== keysArray2.length) return false
//     for(let i = 0 ; i < keysArray1.length ; i++){
//         if(keysArray1[i] !== keysArray2[i]){
//             return false
//         }
//         let keyForObj1 = keysArray1[i]
//         let keyForObj2 = keysArray2[i]
//         if(obj1[keyForObj1] !== obj2[keyForObj2]){
//             return false
//         }
//     }
//     return true
// }

// console.log(compare({a : 1 , b : 2}, {b : 2 , a : 1}))

//follow -up -> what is deep copy and shallow copy
// console.log('First');

// setTimeout(() => {
//     console.log('Second');//5
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Third');//3
// }).then(() => {
//     console.log('Fourth');//4
// });

// console.log('Fifth’)

//given a react code snippet , on another variable change first variable should not change
//question-> import { useEffect, useState } from 'react';
// import './App.css';

// function Sln() {
//   const [count, setCount] = useState(0);
//   const [multiCount, setMultiCount] = useState(0);
//   const [inputValue, setInputValue] = useState('');

//   const logValue = () => {
//     console.log('Value: ', inputValue);
//   };

//   const handleReset = () => {
//     setInputValue('');
//     setCount(0);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleCountClick = () => {
//     setCount((count) => count + 1);
//   };

//   useEffect(() => {
//     logValue();
//   }, [inputValue, logValue]);

//   useEffect(() => {
//     setMultiCount(count * 5);
//   }, [count]);

//   return (
//     <>
//       <input value={inputValue} onChange={handleInputChange} />
//       <div className="card">
//         <button onClick={handleCountClick}>count is {count}</button>
//       </div>
//       <div className="card">
//         <button disabled>
//           {count} * 5 = {multiCount}
//         </button>
//       </div>
//       <div className="card">
//         <button onClick={() => handleReset()}>Reset</button>
//       </div>
//     </>
//   );
// }

// export default Sln;

//solution ->
//approach -> create logValue on input value change only and then pass it as a dependency and call it and pass an extra dependency as count in useeffect,that,s it

// function Sln() {
//   const [count, setCount] = useState(0);
//   const [multiCount, setMultiCount] = useState(0);
//   const [inputValue, setInputValue] = useState('');

//   const logValue = useCallback(() => {
//     console.log('Value: ', inputValue);
//   },[inputValue]);

//   const handleReset = () => {
//     setInputValue('');
//     setCount(0);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleCountClick = () => {
//     setCount((count) => count + 1);
//   };

//   useEffect(() => {
//     logValue();
//   }, [ logValue,count]);

//   useEffect(() => {
//     setMultiCount(count * 5);
//   }, [count]);

//   return (
//     <>
//       <input value={inputValue} onChange={handleInputChange} />
//       <div className="card">
//         <button onClick={handleCountClick}>count is {count}</button>
//       </div>
//       <div className="card">
//         <button disabled>
//           {count} * 5 = {multiCount}
//         </button>
//       </div>
//       <div className="card">
//         <button onClick={() => handleReset()}>Reset</button>
//       </div>
//     </>
//   );
// }

// export default Sln;

//given an api i have to fetch items as soon as i type in search box,code should be properly structured and error handling,also apply debounce functionality
// Solution link-> https://codesandbox.io/p/sandbox/api-fetching-project-8cpmky?file=%2Fsrc%2FSearchCon[…]ebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D
