import React, { useEffect, useState } from "react";
import "./products.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="home">
      <h2>Product Dashboard</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
