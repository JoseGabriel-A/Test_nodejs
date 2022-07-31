let claculateMaxEvenSu1 = function (array) {
  const reducer = (accumulator, curr) => accumulator + curr;
  if (array.reduce(reducer) % 2 == 0) {
    console.log("The value is even");
  } else {
    console.log("The value is odd");
  }
  return array.reduce(reducer);
};

let sum = claculateMaxEvenSu1([2, 6, 10, 1, 1]);
console.log(sum);
