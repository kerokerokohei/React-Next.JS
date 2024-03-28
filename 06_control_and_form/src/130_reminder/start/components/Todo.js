import { useState } from "react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [list, setList] = useState(todosList);
  const [text, setText] = useState();

  const deleteTask = (oldtaskid) => {
    const newLists = list.filter((task) => {
      return task.id !== oldtaskid;
    });
    setList(newLists);
  };

  const changeValue = (e) => {
    setText(e.target.value);
  };

  const addnewTask = (e) => {
    const idnum = list.length + 1;
    const newtask = { id: idnum, content: text };
    setList((prevlist) => [...prevlist, newtask]);
    setText("");
  };

  return (
    <>
      {list.map((task) => {
        return (
          <div key={task.id}>
            <button onClick={() => deleteTask(task.id)}>完了</button>
            <div>{task.content}</div>
          </div>
        );
      })}
      <input onChange={changeValue} value={text} />
      <button onClick={addnewTask}>追加</button>
    </>
  );
};

export default Todo;
