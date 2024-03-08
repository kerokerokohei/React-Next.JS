// htmlのJSでのタグ取得
const h1 = document.querySelector("h1"); //ここで取得するのはDOMオブジェクト
console.dir(h1);

console.log(h1.textContent);
h1.textContent = "変更後のタイトル";
console.log(h1.textContent);

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  //eはイベントオブジェクト
  console.dir(e);
  console.log("hello");
});
