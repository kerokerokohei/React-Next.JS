import "./Child.css";
import { List, List2 } from "./List.js";
const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
      <List2 />
    </div>
  );
};

export default Child;
