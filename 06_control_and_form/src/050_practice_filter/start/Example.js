import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [inputvalue, setValue] = useState("");
  return (
    <>
      <h3>練習問題</h3>
      <p>
        入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。
      </p>
      <input onChange={(e) => setValue(e.target.value)}></input>
      <ul>
        {persons
          .filter((person) => person.name.indexOf(inputvalue) !== -1)
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
