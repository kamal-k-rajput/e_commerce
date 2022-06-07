import React from "react";

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Create.css";
export const EditUser = () => {
  const { user_id } = useContext(UserContext);

  //   const [formData, setformData] = useState({
  //     name: "",
  //     mobileNumber: "",
  //   });
  const [formData, setformData] = useState({});
  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value !== "") {
      setformData({
        ...formData,
        [name]: value,
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    // synchronous function
    for (let key in formData) {
      if (formData[key] !== "") {
      }
    }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch(`http://localhost:5500/users/${user_id}/edit`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        !data.status
          ? alert("new data saved  successfully")
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

        <input type="submit" value="Edit Details" />
      </form>
      <Link to={`/users/${user_id}`}>get details</Link>
    </div>
  );
};
