const Example = () => {
  const clickHandler = () => {
    alert("clicked button");
  }
  const clickHandler2 = () => {
    console.log("clicked button");
  }
  return (
    <>
      <button onClick = {clickHandler}>click!</button>
      <button onClick = {clickHandler2}>click!</button>
    </>
  );
};

export default Example;
