import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`
    const o = {color: "blue", num:123}

    return (
        <>
            <Child 
            // color = "red"
            // num= {123} 
            {...o} //あらかじめ，オブジェクトが用意されているのであれば，左のように書けば，上２行と同じ意味
            fn = {hello} 
            obj = {{ name: "Tom", age:18 }}
            />
            {/* {<Child color="blue" />} */}
        </>
    )
}

export default Example;
