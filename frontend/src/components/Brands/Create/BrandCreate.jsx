import React from "react";
import { useState } from "react";
export const BrandCreate = () => {
  const [formdata, setformdata] = useState({
    brandName: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const headerOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    await fetch(`http://localhost:5500/brands/create`, headerOptions).then(
      async (res) => {
        let d = await res.json();
        if (d.status) {
          alert("Your Brand Created Successfully");
        } else {
          alert("Brand alredy exists.");
        }
      }
    );
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }
  return (
    <div>
      <h2>Create New Brand </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand Name:
          <input
            type="text"
            name="brandName"
            placeholder=" Enter Brand Name"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create New Brand" />
      </form>
    </div>
  );
};
