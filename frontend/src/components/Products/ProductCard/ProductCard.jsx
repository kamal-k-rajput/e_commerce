import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <div>Name: {product.productName}</div>
      <div>Price: {product.price}</div>
      <div>Remaining Product : {product.qty}</div>
      <Link to={`/products/${product._id}`}>Get Product Details</Link>
    </div>
  );
};
