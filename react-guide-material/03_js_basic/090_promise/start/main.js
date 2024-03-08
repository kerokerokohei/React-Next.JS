// 非同期処理 Promise
let a = 0;


new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)       //setTimeout()内で2000ms経過後にa = 1などが代入され, resolve()が返され，thenに処理が移る　
    }, 2000);           //reject()は何らかのエラーが出たときに使用
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    console.log(b);
}).catch((c) => [
    console.log("catchが実行",c)
])



