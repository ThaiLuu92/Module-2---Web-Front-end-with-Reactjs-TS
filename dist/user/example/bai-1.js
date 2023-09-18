"use strict";
// function countChar(str: string): { [key: string]: number } {
//   let count: { [key: string]: number } = {};
//   for (let index = 0; index < str.length; index++) {
//     const key: string = str[index];
//     if (count[key]) {
//       count[key] = count[key] + 1;
//     } else {
//       count[key] = 1;
//     }
//   }
//   return count;
// }
// console.log(countChar("helllllo"));
const numberArray = [2, 7, 3, 6, 9, 10, 0];
let checkNumberArr = [];
function checkNumber(numberArr) {
    for (let i = 0; i < numberArr.length; i++) {
        for (let j = i + 1; j < numberArr.length; j++) {
            if (numberArr[i] + numberArr[j] == 9) {
                checkNumberArr.push({ index1: numberArr[i], index2: numberArr[j] });
            }
        }
    }
    return checkNumberArr;
}
console.log(checkNumber(numberArray));
