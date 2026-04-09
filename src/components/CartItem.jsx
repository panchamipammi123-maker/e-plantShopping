import React from "react";

function CartItem() {
  const cart = [
    { id: 1, name: "Snake Plant", price: 25, quantity: 2 },
    { id: 2, name: "Pothos", price: 20, quantity: 1 },
  ];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total amount: ₹{total}</p>

      {cart.map((item) => (
        <div key={item.id}>
          <img src="https://via.placeholder.com/100" alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit price: ₹{item.price}</p>
          <p>Total for this item: ₹{item.price * item.quantity}</p>
          <button>+</button>
          <button>−</button>
          <button>Delete</button>
        </div>
      ))}

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
