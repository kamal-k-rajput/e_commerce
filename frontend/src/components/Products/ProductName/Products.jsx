import React from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./Product.css";
import { ProductCard } from "../ProductCard/ProductCard";
export const Products = () => {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(0);
  const [params, setparams] = useState({
    pageNo: 1,
    results: 6,
    sortBy: 1,
    filters: [],
    minPrice: 1,
    maxPrice: 1000000,
  });
  function handleParams(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setparams({ ...params, [name]: value });
  }
  function handlePrice(e) {
    const { name, value } = e.target;
    setparams({ ...params, [name]: value });
  }
  const filters = [
    "man",
    "women",
    "children",
    "kids",
    "electronic",
    "mobile",
    "computer",
    "watch",
  ];
  function handlePage(value) {
    if (value === -1 && params.pageNo > 1) {
      setparams({ ...params, pageNo: params.pageNo + value });
    } else if (value === 1) {
      setparams({ ...params, pageNo: params.pageNo + value });
    }
  }
  useEffect(() => {
    async function getData() {
      await fetch(
        `http://localhost:5500/products?` + new URLSearchParams(params)
      ).then(async (d) => {
        let responseData = await d.json();

        setcount(responseData.count);
        setdata(responseData.products);
      });
    }
    getData();
  }, [params]);

  return (
    <div>
      <h2>Products</h2>
      <div className="slider_box">
        <label>
          Sort by:
          <select name="sortBy" onChange={handleParams}>
            <option value="">Sort By</option>
            <option value="1">Ascending</option>
            <option value="-1">Descending</option>
          </select>
        </label>
        <label>
          Min Price
          <div className="display_price">{params.minPrice}</div>
          <input
            type="range"
            name="minPrice"
            min="1"
            max="100000"
            step="99"
            onChange={(e) => {
              e.preventDefault();
              setTimeout(() => {
                handlePrice(e);
              }, 500);
            }}
          />
        </label>
        <label>
          Max Price
          <div className="display_price">{params.maxPrice}</div>
          <input
            type="range"
            name="maxPrice"
            min="1"
            max="1000000"
            step="99"
            onChange={(e) => {
              e.preventDefault();
              setTimeout(() => {
                handlePrice(e);
              }, 500);
            }}
          />
        </label>
        <label>
          Results:
          <input
            type="number"
            placeholder="enter number"
            name="results"
            onChange={handleParams}
          />
        </label>
      </div>
      <div className="products-container">
        <div className="filters-products">
          <h4>Apply Filters</h4>
          {filters.map((el) => {
            return (
              <label key={nanoid(4)}>
                {el}
                <input
                  type="checkbox"
                  value={el}
                  name="filters"
                  onChange={handleParams}
                />
              </label>
            );
          })}
        </div>
        <div className="product_card">
          {data.map((el) => {
            return <ProductCard product={el} key={nanoid(5)} />;
          })}
        </div>
      </div>
      <div className="page_btn_container">
        <div>current page:{params.pageNo}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handlePage(-1);
          }}
        >
          Pre
        </button>
        <div>Total page:{Math.ceil(count / params.results)}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handlePage(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
