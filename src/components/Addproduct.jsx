import React, { useState } from "react";
import axios from "axios";
import "./addproduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!product.title) tempErrors.title = "Product Name is required";
    if (!product.image) tempErrors.image = "Image URL is required";
    if (!product.price) tempErrors.price = "Price is required";
    if (!product.rating) tempErrors.rating = "Rating is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("https://fakestoreapi.com/products", product)
        .then((response) => {
          console.log("New Product added:", response.data);
          console.log("Submitted Product:", product);
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
          {errors.image && <span className="error">{errors.image}</span>}
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            required
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
