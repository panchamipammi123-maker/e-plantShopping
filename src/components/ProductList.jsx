import React, { useState } from "react";

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
  const [cart, setCart] = useState([]);

  const handleAddToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Plants</a>
        <a href="#">Cart</a>
        <span>Cart ({cart.length})</span>
      </nav>

      <h2>Houseplants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} width="100" />
          <h3>{plant.name}</h3>
          <p>₹{plant.price}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={cart.some((item) => item.id === plant.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
