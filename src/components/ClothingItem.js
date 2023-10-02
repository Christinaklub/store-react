import React from 'react';

const ClothingItem = ({ item, onAddToCart }) => {
  return (
    <div className="clothing-item">
      <img src={item.image} alt={`${item.brand} - ${item.model}`} />
      <div className="item-details">
        <p>{item.brand}</p>
        <p>{item.model}</p>
        <p>{item.price}kr</p>
        <button onClick={() => onAddToCart(item)}>Tilføj</button>
      </div>
    </div>
  );
};

export default ClothingItem;