// 三項演算子（ ? : ）

const a = 0;                         // true/false  1/0 でも可
let resultA = a ? "true" : "false";  //下のif文と同じ意味

// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

// console.log(getResult());
