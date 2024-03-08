import { useState } from "react";

const Example = () => {
  let valArray = useState(0);
  
  return (
    <>
      <input 
      type = "text"
      onChange={(e) => {
        const setFn = valArray[1];
        setFn(e.target.value)
      }} /> = {valArray[0]}
    </>
  );
};

export default Example;
