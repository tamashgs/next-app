'use client';
import { useState } from "react";

export default function Cart() {
  const items  =  [
      { id: 1, name: 'Residential Solar Panel', description: 'Perfect for powering your home with clean energy.', price: 499, quantity: 1 },
      { id: 2, name: 'Commercial Solar Panel', description: 'Ideal for businesses and industrial applications.', price: 799, quantity: 2 },
      { id: 3, name: 'Premium Solar Panel', description: 'High efficiency with advanced solar technology.', price: 999, quantity: 1 }
    ];

    const [cartItems, setCartItems] = useState(items);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Function to update the quantity of an item
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: '#264653', color: '#ffffff', padding: '20px 10%' }}>
        <h1>Shopping Cart</h1>
      </header>

      {/* Cart Section */}
      <section style={{ padding: '40px 10%' }}>
        {cartItems.length > 0 ? (
          <>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
                  <th style={{ padding: '10px' }}>Product</th>
                  <th style={{ padding: '10px' }}>Price</th>
                  <th style={{ padding: '10px' }}>Quantity</th>
                  <th style={{ padding: '10px' }}>Total</th>
                  <th style={{ padding: '10px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '10px' }}>{item.name}</td>
                    <td style={{ padding: '10px' }}>${item.price.toFixed(2)}</td>
                    <td style={{ padding: '10px' }}>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        style={{ width: '50px', textAlign: 'center' }}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td style={{ padding: '10px' }}>${(item.price * item.quantity).toFixed(2)}</td>
                    <td style={{ padding: '10px' }}>
                      <button
                        style={{
                          backgroundColor: '#e63946',
                          color: '#ffffff',
                          padding: '5px 10px',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total and Checkout Section */}
            <div style={{ textAlign: 'right' }}>
              <h3>Total: ${calculateTotalPrice()}</h3>
              <button
                style={{
                  backgroundColor: '#2a9d8f',
                  color: '#ffffff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
                onClick={() => alert('Proceeding to checkout...')}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </section>
    </div>
  );
}