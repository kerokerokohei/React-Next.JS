const List = ({ list, deleteTask }) => {
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
    </>
  );
};

export default List;
