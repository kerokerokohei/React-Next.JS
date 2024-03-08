// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
// console.log(result);

// ---スプレッド演算子使用バージョン---
// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(...nums);
// console.log(result);
// ---スプレッド演算子使用バージョン---

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1, ...arr2, 10]; //2つの配列を繋げることも可能
// let newArr1 = arr1;
// newArr.push(4)
// console.log(newArr, arr1);

// const obj = {
//   name: "Tom",
//   age: 22,
// };
// const newObj = { ...obj };

// console.log(newObj);



// const obj = {
//   name: "Tom",
//   age: 22,
// };

// const newObj = { ...obj };
// newObj.name = "John";
// console.log(newObj, obj);

// const restA = (...argA) => console.log(argA);  //可変超変数を引数とする関数の場合に利用
// restA(1, 3, 4)



// const restA = (...argA) => console.log(argA);
// restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB); //ここでは1がnに入力される　　
restB(1, 3, 4)
