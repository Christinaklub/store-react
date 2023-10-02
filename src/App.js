import React, { useState } from 'react';
import './App.css';
import ClothingItem from './components/ClothingItem';
import CartSidebar from './components/CartSidebar';
import clothingData from './clothingData';

function App() {
  const [clothingItems, setClothingItems] = useState(clothingData);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Tilføj tingene til kurven
    setCartItems([...cartItems, item]);

    const updatedClothingItems = clothingItems.filter(
      (clothing) => clothing.id !== item.id
    );
    setClothingItems(updatedClothingItems);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Tøj Butik</h1>
        <div className="clothing-list">
          {clothingItems.map((item) => (
            <ClothingItem key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
      <CartSidebar cartItems={cartItems} />
    </div>
  );
}

export default App;