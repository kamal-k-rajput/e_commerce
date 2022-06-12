import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="users">get all users</Link>
        <Link to="users/create">Create a new User</Link>
        <Link to="brands">Get all Brands</Link>
        <Link to="brands/create">Create a new Brand</Link>
        <Link to="products">See Products</Link>
        <Link to="products/create">Create a Product</Link>
      </div>
    </>
  );
};
