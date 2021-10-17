// const year = [1945,1379,45];
// const days = new Array(1234,124); //create an object of arrays
// console.log(days);
// //methods of array
// let length = days.push(23); //it adds an element into an array and returns new length
// console.log(length);
// length = days.pop(); //removes the last element and returns it
// console.log(length);

// length = days.shift();//removes the first element from an array and returns that removed element.
// console.log(length);
// length = days.unshift(12); //adds an element to the front and returns the length
// console.log(length);
// let idx = days.indexOf(12);
// console.log(idx);
// let has = days.includes(12);
// console.log(has);

//const arr = [2, 3, 4, 5, 9];

// //const [x, y, z] = arr;
//  let y = 0;
//  const [x, , z] = arr;

// console.log(x,  z);
//  //spread operator
// const newArr = [...arr, 1, 2, 3];
// console.log(newArr);

//rest operator
//const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b);
// console.log(other);
// for (let items of other) {
//     //for of loop
//     console.log(items);
//   }
// for (let items of other.entries()) {
//      console.log(items); // item is an array
//      //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
//     console.log(`The ${items[0]} is ${items[1]}`);
//   }
// let slicedArr = arr.slice(4); // returns a new array invlusive first index , exclusive last
// slicedArr = arr.slice(-2); // last elments , new array
// console.log(slicedArr);
// let spliced = arr.splice(2,2); // changes the original array , returns the removed elements
// // console.log(arr);
// // console.log(spliced);
// let idx = 0;

// arr.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });
// /functions passed as parameter are called call back function
//  let booloenVariable = false;
//  let booloenVar = "false";
//  console.log(booloenVariable);
//  console.log(booloenVar);
//  let a = 2;
//  console.log(typeof a);

// array
//const arr = [2, 3, 4];
//console.log(arr);
//let newArr = new Array(23, 45, 56);
//let lastele = arr.pop(); //removes the last element from the array and returns it
//console.log(lastele);

//let length = arr.unshift(1);//inserts the element at the start of the array and returns the new length of the array
//console.log(arr, length);
//length = arr.shift();//Removes the first element from an array and returns it. (opposite of pop)
//console.log(length);

// let idx = arr.indexOf(5);
// console.log(idx);

// let isthere = arr.includes(7);
// console.log(isthere);

//destructuring operator
// let y = 0;
// const arr = [2, 3, 4];
// const [x, z] = arr;
// console.log(x, y, z);

// //spread
// const newArr = [...arr, 1, 2]; // 2 3 4 1 2
// console.log(newArr);
// [0, 2], [1, 3];

// //rest opposite of spread
// const [a, b, ...other] = newArr;
// console.log(a, b, other);

// // for of
// for (let item of newArr) {
//   console.log(item);
// }
// for (let item of newArr.entries()) {
//   // arr ofg two elemnsts  first is index other is item
//   console.log(`The ${item[0]} th is ${item[1]}}`);
// }
// 2 3 4 1 2 newArr
//  1 2 3 4 5
 //let ans = newArr.slice(-2);
// spilce manipilates the new array and returns the deleted elements
// slice Returns a copy of a section of an array.
//  let ans = newArr.splice(2, 2); // removing , first parameter denotes from which idx start splicing, 2nd shows how many elements have to be removed
//  console.log(ans);
// console.log(newArr);

//arr.splice();
// let ans = newArr.reverse();
// console.log(ans);
// ans = arr.concat(newArr);

//forEach // callback
// const print = function(){

// }
 let arr = [1, 2, 3, 4, 5];
//  let arr =2;
//  const print = (arr) => arr * 2;
//  console.log(print(arr));
// arr.forEach((item, __, array) => console.log(item, array));
//hoisting : using a function befire its declaration

//////////////////////////////////////////////////////////////............... //////////////////////////////////////////////
//filter method Returns the elements of an array that meet the condition specified in a callback function.

//const newArr = arr.filter((elem) => elem % 2 == 0);
//console.log(newArr);
//map-> Calls a defined callback function on each element of an array, and returns an array that contains the results.
//  const mappedArr = arr.map((elem) => 2 * elem);
//  console.log(mappedArr);

// // arr.sort();

// // assending a-b;
// arr.sort((a, b) => b - a);
// console.log(arr);

// const deposit = [
//   { amount1: 28000, date: "12/10/2000" },
//   { amount1: 90000, date: "12/11/2000" },
//   { amount1: 28800, date: "12/12/2000" },
// ];
// const n = 1;
// deposit.sort((a, b) => a.amount1 - b.amount1);
// console.log(deposit);
//compressing entire array one single variable
//Calls the specified callback function for all the elements in an array. The return value 
//of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//  const sum = arr.reduce((acc, elem) => (acc + elem) % 2);
//  console.log(sum);

// const { name, date } = data;
//const { name = "", date: birthday = 5 } = data;
 //console.log(data);

//set
//mySet is an instance of class Set
// const arr = [2, 8, 4, 1, 8];
// const mySet = new Set([...arr]);
// const setChar = new Set("ahjkhgjh");

// let len = setChar.size;
// setChar.add(4);
// console.log(setChar);
// // delete
// setChar.clear();
// console.log(setChar.has(4));
//there cant be duplicates in the sets

//map
//(key : value)
// const myMap = new Map();
// myMap.set("name", "abs");
// console.log(myMap);
// console.log(myMap.get("name"));

const str = "abcdefg";
// let idx = str.indexOf("a");
// console.log(idx);
// idx = str.indexOf("m");
// console.log(idx);

 //let newstr = str.slice(2, 7); //doesnt change the old string //last index is exclusiver

//newstr = str.toUpperCase(); // returns a nerwStrings
// console.log(newstr);
//console.log(str);
// newstr = str.trim(); // removes space from begining and from the end

// newstr = str.replace("anA", "@"); // only replace first of that kind // only one occurance , replaces substring

//let has = str.includes("singh");
// //console.log(has);

// has = str.startsWith("anA");
// const arr = str.split("");
// // const myStr = arr.join("@");
// console.log(arr);
// //console.log(myStr);
// newstr = str.padStart(10, "@"); //final len of the string will be made 10;
 //console.log(str);
 //console.log(newstr);
//  newstr = str.padEnd(10, "@"); //final len of the string will be made 10;
// console.log(str);
//  console.log(newstr);