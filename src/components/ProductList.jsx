import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice"; // Adjust path if different
import "./App.css"; // for navbar

const plants = [
  {
    id: 1,
    category: "Indoor",
    name: "Snake Plant",
    price: 25,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    category: "Indoor",
    name: "Pothos",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    category: "Outdoor",
    name: "Bougainvillea",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    category: "Outdoor",
    name: "Jasmine",
    price: 22,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    category: "Succulents",
    name: "Aloe Vera",
    price: 18,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    category: "Succulents",
    name: "Echeveria",
    price: 16,
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart([...addedToCart, plant.id]);
  };

  const categories = ["Indoor", "Outdoor", "Succulents"];

  return (
    <div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart</a>
        <span>Cart ({addedToCart.length})</span>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      {categories.map((cat) => (
        <div key={cat} style={{ margin: "20px 0" }}>
          <h2>{cat} Plants</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants
              .filter((plant) => plant.category === cat)
              .map((plant) => (
                <div key={plant.id} style={{ margin: "10px" }}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="100"
                    height="100"
                  />
                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart.includes(plant.id)}
                  >
                    {addedToCart.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
