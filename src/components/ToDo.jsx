import { useState } from "react";

const ToDo = () => {
let [fruits, setFruits] = useState(["apple", "banana", "orange"]);
const deleteItem = () => {
  setFruits(fruits.filter((f, i) => f !== "banana")); // Deletes the first item
};
return (
  <ul>
    {fruits.map((f, i) => (<li key={i}>{f} </li>))}
    <button onClick={deleteItem}>delete Banana</button>
  </ul>
);
}
export default ToDo;
