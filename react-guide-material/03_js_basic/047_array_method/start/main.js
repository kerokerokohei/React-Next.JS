const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i < arry.length; i++) {
    const val = arry[i] * 2;
    if(val > 50) {
    newArry.push(arry[i] * 2)
}
}

console.log(newArry);

//上記の同様の処理をmap関数dを用いて記述してみる     map()は配列の各要素に対して()内の処理を実行
const newArry2 = arry.map(val => {
    return val * 2;   
});
const newArry3 = newArry2.filter(val => val > 50)      
console.log(newArry3);