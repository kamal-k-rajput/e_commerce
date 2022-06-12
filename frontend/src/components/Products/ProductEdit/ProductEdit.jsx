import React, { useState } from "react";
import { createBrowserHistory } from "history";
export const ProductEdit = () => {
  const history = createBrowserHistory();
  const realId = history.location.pathname.split("/")[2];
  const [formdata, setformdata] = useState({});
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const headerOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    await fetch(
      `http://localhost:5500/products/${realId}/edit`,
      headerOptions
    ).then(async (d) => {
      let x = await d.json();
      if (x.status) {
        alert("your product has been updated successfully");
      }
    });
  }
  return (
    <div>
      Edit product form
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Update name
          <input
            type="text"
            placeholder="Edit Product Name"
            name="productName"
            onChange={handleChange}
          />
        </label>
        <label>
          Update Price
          <input
            type="number"
            placeholder="Edit new Price"
            name="price"
            onChange={handleChange}
          />
        </label>
        <label>
          New Quantity
          <input
            type="number"
            name="qty"
            placeholder="Edit new Quantity"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};
