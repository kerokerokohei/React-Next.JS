import { useState } from "react";

const Example = () => {
    const [ val, setVal ] = useState(0);
    const countUp = () => {
        setVal(val + 1)
        setVal(prevstate => {return prevstate + 1})
    }
    const countDown = () => {
        setVal(val - 1)
    }
    return(
        <>
            <p>current count Num: {val}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
  
};

export default Example;
