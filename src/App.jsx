import React from "react";
import Products from "./components/Products";
import Addproduct from "./components/Addproduct";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<Addproduct />} />
      </Routes>
    </div>
  );
}


export default App;
