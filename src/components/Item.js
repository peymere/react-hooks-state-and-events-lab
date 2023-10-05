import React, {useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState("add")
  
  const handleAddItem = () => {
    setAddItem(!addItem)
  }

  const buttonText = addItem ? "Add to Cart" : "Remove From Cart"
  const liClassName = addItem ? "" : "in-cart"
  const buttonClassName = addItem ? "add" : "remove"
  
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleAddItem} >{buttonText}</button>
    </li>
  );
}

export default Item;

