import React from 'react';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 1 },
  ];

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
          <button>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
