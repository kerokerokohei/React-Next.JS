import { hello, User } from "./module.js";
import funcB from "./module.js";  //default exportなので{}なしでおけ

hello();



const fn = (num) => {
    return num * 2
}

console.log(fn(2))

const f = num => {
    console.log(num);

}

const fnObj = (num) => ({ result: num * 2 }) //アロー関数でオブジェクトを返す記法（）でかこむ　アロー関数は=>の先がreturnの先

console.log(fnObj(5))
