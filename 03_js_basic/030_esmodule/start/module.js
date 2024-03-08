export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

export default funcB;  //default でエクスポートできるのは1ファイル1つだけ

class User {
  constructor(name) {
    this.name = name;
  }
}

export { User }   //オブジェクト（クラス）もエクスポート可能
