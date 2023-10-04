import React, { useState } from 'react';
import './App.css';
import ClothingItem from './components/ClothingItem';
import CartSidebar from './components/CartSidebar';
import clothingData from './clothingData';

function App() {
  const [clothingItems, setClothingItems] = useState(clothingData);
  const [cartItems, setCartItems] = useState([]);

  // Funktion til at tilføje en vare til indkøbskurven
  const addToCart = (item) => {
  // Funktion til at tilføje en vare til indkøbskurven
  setCartItems([...cartItems, item]);

    // Fjerner den tilføjede vare fra tøjvarer ved at filtrere den ud
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