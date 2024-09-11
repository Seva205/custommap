// Chunk an Array into Subarrays
// Write a function that splits an array into smaller arrays (chunks) of a specified size.

// javascript
// const array = [1, 2, 3, 4, 5, 6, 7];
// const size = 3;

// *Objective:* Split the array into chunks of the given size.

// *Expected Output:*
// javascript
// [[1, 2, 3], [4, 5, 6], [7]]

// const array = [1, 2, 3, 4, 5, 6, 7];
// const size=3;
// function bolunmusarr(arr, size) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }
// const yenisi = bolunmusarr(array, size);
// console.log(yenisi);

// const words = ["apple", "banana", "apple", "orange", "banana", "banana"];

// function tekrarlanansoz(words) {
//   const tekrarlanansozMap = {};

//   words.forEach((word) => {
//     if (tekrarlanansozMap[word]) {
//       tekrarlanansozMap[word]++;
//     } else {
//       tekrarlanansozMap[word] = 1;
//     }
//   });

//   let encoxtekrarlanansoz = "";
//   let maxCount = 0;

//   for (const word in tekrarlanansozMap) {
//     if (tekrarlanansozMap[word] > maxCount) {
//       maxCount = tekrarlanansozMap[word];
//       encoxtekrarlanansoz = word;
//     }
//   }

//   return encoxtekrarlanansoz;
// }

// const result = tekrarlanansoz(words);
// console.log(result);

// Deep Flatten an Array
// Given an array that contains both nested arrays and single elements, write a function to flatten it completely.


// const nestedArray = [1, [2, [3, 4], 5], [6], 7];


// *Objective:* Flatten the array into a single array of numbers.

// *Expected Output:*

// [1, 2, 3, 4, 5, 6, 7]

// const nestedArray = [1, [2, [3, 4], 5], [6], 7];
//  function flattenArr(array) {
//     return array.reduce((acc,item)=>{
//         if (Array.isArray(item)) {
//             return acc.concat(flattenArr(item));
//           } else {
            
//             return acc.concat(item);
//           }
//         }, []);
//       };
//       const result = flattenArr(nestedArray);
// console.log(result);

