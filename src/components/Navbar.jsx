// import React from 'react'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>
//     <nav className="navbar">
//      <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/add-product">Add Product</Link></li>
//       </ul>
//     </nav>
//     </div>
//   )
// }

// export default Navbar

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Product Management</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
