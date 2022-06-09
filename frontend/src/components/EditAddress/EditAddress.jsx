import React from "react";
import { useContext, useState } from "react";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";
export const EditAddress = () => {
  const { user_id } = useContext(UserContext);
  const { address_idx } = useContext(AddressContext);

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
    fetch(
      `http://localhost:5500/users/${user_id}/addresses/${address_idx}/edit`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        data.status
          ? alert("address saved  successfully")
          : alert("something went wrong please add new address");
      });
  }
  return (
    <div to="">
      <form onSubmit={handleSubmit}>
        <h3> Enter Only those fields that you want to change</h3>
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
        <input type="submit" value="Edit Address" />
      </form>
    </div>
  );
};
