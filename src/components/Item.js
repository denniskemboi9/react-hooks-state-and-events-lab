import React from "react";
import { useState } from "react"


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : ""

  function handleAddToCartClick() {
    setIsInCart(!isInCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;