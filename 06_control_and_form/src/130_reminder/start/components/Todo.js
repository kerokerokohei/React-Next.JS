import { useState } from "react";
import List from "./List";
import Form from "./Form";

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

  const deleteTask = (oldtaskid) => {
    const newLists = list.filter((task) => {
      return task.id !== oldtaskid;
    });
    setList(newLists);
  };

  const addnewTask = (e) => {
    const idnum = list.length + 1;
    const newtask = { id: idnum, content: e.target.value };
    setList((prevlist) => [...prevlist, newtask]);
  };

  return (
    <>
      <List list={list} deleteTask={deleteTask} />
      <Form addnewTask={() => addnewTask()} />
    </>
  );
};

export default Todo;
