import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ThankYou from './Components/ThankYou';  
//import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState(null);

  // Add product to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear all items in the cart and generate order number
  const completeOrder = () => {
    // Generate a random order number
    const newOrderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderNumber(newOrderNumber);
    // Clear the cart
    setCartItems([]);
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartItemCount={cartItems.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  clearCart={clearCart}
                />
              } 
            />
            <Route 
              path="/thank-you" 
              element={
                <ThankYou 
                  orderNumber={orderNumber}  // Make sure ThankYou uses the prop correctly
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
