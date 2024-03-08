import "./Child.css";
import React from "react";

// console.log(React); 確認用

const Child = () => {
  return (
    <React.Fragment>
    <div className="component">
      <h3>Hello Component</h3>
    </div>
     <h3>Hello Fragment</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque saepe velit est temporibus voluptates, aperiam asperiores. Illo, ea impedit reiciendis iure ex eius! Odio deserunt hic quae voluptatibus cupiditate.</p>
    </React.Fragment>
  );
};

export default Child;
