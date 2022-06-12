import React, { useState } from "react";

export const ProductCreate = () => {
  const [tags, settags] = useState([]);
  const [img, setimg] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });
  const [formdata, setformdata] = useState({
    productName: "",
    category: "",
    qty: 1,
    deliveryCharge: 0,
    price: 0,
    images: img,
    tags: tags,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const headerOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    await fetch(`http://localhost:5500/products/create`, headerOptions).then(
      async (res) => {
        let d = await res.json();
        console.log(d);
        if (d.status) {
          alert("Your Product Created Successfully");
        } else {
          alert("Pass all necessary fileds.");
        }
      }
    );
  }
  function handleChange(e) {
    e.preventDefault();
    let { name, value } = e.target;

    if (name === "tags") {
      value = value.split(",");
      settags([value]);
    }
    setformdata({
      ...formdata,
      [name]: value,
    });
  }
  function handleImageChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    setimg({
      ...img,
      [name]: value,
    });
    setformdata({
      ...formdata,
      img: img,
    });
  }
  return (
    <div>
      <h2>Create a Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {"Name "}
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            onChange={handleChange}
          />
        </label>
        <label>
          Category
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity
          <input
            type="number"
            name="qty"
            placeholder="Quantity"
            onChange={handleChange}
          />
        </label>
        <label>
          Delivery charge
          <input
            type="number"
            name="deliveryCharge"
            placeholder="Delivery charge"
            onChange={handleChange}
          />
        </label>
        <label>
          M.R.P.
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
        </label>
        <label>
          Add tags:
          <input
            type="text"
            name="tags"
            placeholder="tags separated by comma(,) e.g. computer,mobile"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Image address (you can add max 4 images)
          <br />
          <input
            type="url"
            name="img1"
            placeholder="image address 1"
            onChange={handleImageChange}
          />
          <input
            type="url"
            name="img2"
            placeholder="image address 2"
            onChange={handleImageChange}
          />
          <input
            type="url"
            name="img3"
            placeholder="image address 3"
            onChange={handleImageChange}
          />
          <input
            type="url"
            name="img4"
            placeholder="image address 4"
            onChange={handleImageChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
