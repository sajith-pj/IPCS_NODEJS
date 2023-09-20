// for (let i = 0; i < 10000000000; i++) {}

function add(a, b, callback) {
  let sum = a + b;

  callback(sum, 10, subtract);
  //   console.log(sum);
}

const subtract = function (a, b) {
  console.log(a - b);
};

const multiply = (sum, c, callback) => {
  let mul = sum * c;
  callback(mul, 10);
};


// CALLBACK HELL, 

add(5, 5, multiply);
