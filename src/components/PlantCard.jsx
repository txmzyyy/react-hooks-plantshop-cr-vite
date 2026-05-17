import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  const [isInstock, setIsInStock] = useState(true);
  const { name, image, price } = plant;

  function handleStockToggle() {
    setIsInStock((prev) => !prev);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {isInstock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
