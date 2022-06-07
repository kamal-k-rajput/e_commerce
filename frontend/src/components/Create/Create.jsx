import React from "react";
import { useState, useEffect } from "react";
import "./Create.css";
export const Create = () => {
  const [address, setaddress] = useState({
    line_1: "",
    line_2: "",
    postalCode: "",
    city: "",
    state: "",
  });
  const [formData, setformData] = useState({
    name: "",
    mobileNumber: "",
    address: address,
  });
  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleaddress = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setaddress({
      ...address,
      [name]: value,
    });
  };
  useEffect(() => {
    setformData({ ...formData, address: address });
  }, [address]);
  function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:5500/users/create", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
        data.status
          ? alert("user created successfully")
          : alert("fill all the fields");
      });
  }

  return (
    <div className="form-container" id="users/create">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Enter your full name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            onChange={handleEvent}
          />
        </label>
        <label>
          Enter your Mobile Number
          <input
            onChange={handleEvent}
            type="number"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
          />
        </label>
        Enter your complete address
        <label>
          Line 1
          <input
            type="text"
            name="line_1"
            placeholder="Line 1"
            onChange={handleaddress}
          />
        </label>
        <label>
          Line 2
          <input
            onChange={handleaddress}
            type="text"
            name="line_2"
            placeholder="Line 2"
          />
        </label>
        <label>
          Postal Code
          <input
            onChange={handleaddress}
            type="number"
            name="postalCode"
            placeholder="Postal Code"
          />
        </label>
        <label>
          City
          <input
            onChange={handleaddress}
            type="text"
            name="city"
            placeholder="Enter your City"
          />
        </label>
        <label>
          State
          <input
            onChange={handleaddress}
            type="text"
            name="state"
            placeholder="write State name "
          />
        </label>
        <input type="submit" value="ADD USER" />
      </form>
    </div>
  );
};
