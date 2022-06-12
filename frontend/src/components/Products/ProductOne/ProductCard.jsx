import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
export const ProductCard = ({ data }) => {
  return (
    <div>
      ProductCard
      <div>
        <div>Product Name:{data.productName}</div>
        <div>Product Price:{data.price}</div>
        <div>Product Quantity :{data.qty}</div>
        <div>
          Tags:
          {data.tags &&
            data.tags.map((el) => {
              return <span key={nanoid(4)}>{el.toUpperCase()} </span>;
            })}
        </div>
        <Link to={`edit`}>Edit Product Details</Link>
      </div>
    </div>
  );
};
