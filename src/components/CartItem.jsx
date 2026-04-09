import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity + 1,
        })
      );
    }
  };

  const handleDecrement = (id) => {
    const item = items.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else if (item && item.quantity === 1) {
      dispatch(removeItem(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>
        <strong>Total amount: ₹{totalAmount}</strong>
      </p>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => {
          const itemTotal = item.price * item.quantity;
          return (
            <div
              key={item.id}
              style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
            >
              <img
                src="https://via.placeholder.com/100"
                alt={item.name}
                width="80"
              />
              <div style={{ marginLeft: "10px" }}>
                <h3>{item.name}</h3>
                <p>Unit price: ₹{item.price}</p>
                <p>
                  Total for this item: ₹
                  <strong>{itemTotal}</strong>
                </p>

                <div>
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}

      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        disabled={items.length === 0}
      >
        Checkout (Coming Soon)
      </button>

      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => {
          // In real app, navigate to products; here just a link:
        }}
      >
        <a href="#plants">Continue Shopping</a>
      </button>
    </div>
  );
}

export default CartItem;
