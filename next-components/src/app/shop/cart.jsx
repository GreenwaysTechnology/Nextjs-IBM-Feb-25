"use client";

import { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from cart
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>🛍 Shopping Cart</h2>
      <button onClick={() => addItem({ id: Date.now(), name: "Product " + (cart.length + 1) })}>
        ➕ Add Random Product
      </button>
      <ul>
        {cart.map((item, index) => (
          <li key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
            {item.name}
            <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
      {cart.length === 0 && <p>🛒 Your cart is empty</p>}
    </div>
  );
}
