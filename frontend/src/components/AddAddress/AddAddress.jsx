import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./AddAddress.css";
export const AddAddress = () => {
  const { user_id } = useContext(UserContext);
  const [address, setaddress] = useState({
    line_1: "",
    line_2: "",
    postalCode: "",
    city: "",
    state: "",
  });
  const handleaddress = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setaddress({
      ...address,
      [name]: value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    };
    /*
      http://localhost:5500/users/629f013fcbc8aad6fbe67d47/addresses/create
      */
    fetch(
      `http://localhost:5500/users/${user_id}/addresses/create`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {

        data.status
          ? alert("address added  successfully")
          : alert("fill all the fields");
      });
  }
  return (
    <div to="">
      <form onSubmit={handleSubmit}>
        Enter New complete address
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
        <input type="submit" value="ADD Address" />
      </form>
    </div>
  );
};
