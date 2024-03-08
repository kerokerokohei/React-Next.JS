import { useState } from "react";
const Example = () => {
  const [ count , setcount ] = useState(0);
  return (
    <>
      <h3>練習問題</h3>      
        <CountResult title="カウント" count = {count} setcount = {setcount}/>
        <CountUpdate count = {count} setcount = {setcount}/> 
     
    </>
  );
};

const CountResult = ({count}) => <h3>カウント：{count}</h3>

const CountUpdate = ({ count, setcount }) => {
  const countUp = () => {
    setcount(count + 1)
  };
  const countDown = () => {
    setcount(count - 1)
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
