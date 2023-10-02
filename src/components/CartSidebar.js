import React from 'react';

const CartSidebar = ({ cartItems }) => {
  return (
    <div className="sidebar">
      <h2>Kurv</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
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