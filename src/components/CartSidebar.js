import React from 'react';

// Komponenten modtager en prop: 'cartItems', som er en liste af tøjvarer i indkøbskurven.
const CartSidebar = ({ cartItems }) => {
  return (
      // Render en div med CSS-klassen 'sidebar', der indeholder indkøbskurvens indhold.
    <div className="sidebar">
      <h2>Kurv</h2>
        {/* Opret en ordnet liste ('ul') for at vise de tøjvarer, der er i indkøbskurven. */}
      <ul>
          {/* Mapper gennem 'cartItems' og viser hver tøjvare som et listeelement ('li'). */}
        {cartItems.map((item) => (
          <li key={item.id}>
              {/* Vis tøjvarens billede med kilde fra 'item.image' og en alternativ tekst, der kombinerer brand og model. */}
            <img
              src={item.image}
              alt={`${item.brand} - ${item.model}`}
              className="cart-item-image"
            />
            {item.brand} - {item.model} - {item.price}kr
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSidebar;