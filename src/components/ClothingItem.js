import React from 'react';

// Komponenten modtager to props: 'item' (information om tøjvaren) og 'onAddToCart' (en funktion til at tilføje varen til indkøbskurven).
const ClothingItem = ({ item, onAddToCart }) => {
  return (
      // Render en div med CSS-klassen 'clothing-item', der indeholder information om tøjvaren.
    <div className="clothing-item">
      <img src={item.image} alt={`${item.brand} - ${item.model}`} />
          {/* Opret en sektion med detaljer om tøjvaren i en div med klassen 'item-details'. */}
      <div className="item-details">
        <p>{item.brand}</p>
        <p>{item.model}</p>
        <p>{item.price}kr</p>
            {/* Opret en knap med teksten 'Tilføj', der udløser 'onAddToCart' funktionen ved klik. */}
        <button onClick={() => onAddToCart(item)}>Tilføj</button>
      </div>
    </div>
  );
};

export default ClothingItem;