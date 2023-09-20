let arr = [1, 2, 3, 4, 5, 6];
let stringArray = ["banana", "apple", "orange"];

let mixedArray = [1, 2, 3, "banana", "apple", "orange", { name: "apple" }];

//  ARRAY METHODS

arr.push(5);
// console.log(arr);
arr.pop();
// console.log(arr);

// map
//  [ "1. banana", "2. apple", "3.orange" ]
const newArray = stringArray.map((data, index) => {
  console.log(data);
  return `${index + 1}.${data} `; // string + variablename + data
});

stringArray.forEach((data, index) => {
  // for()
  console.log(data);
});

// [ 1,2,3]
const filterArray = arr.filter((data, index) => {
  if (data <= 3) {
    return data;
  }
});

console.log(filterArray);
