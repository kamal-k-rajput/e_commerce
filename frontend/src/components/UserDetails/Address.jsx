import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AddressContext } from "../../context/AddressContext";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
export const Address = () => {
  const [data, setdata] = useState();
  const { user_id } = useContext(UserContext);
  const { handleAddressIndex } = useContext(AddressContext);
  function handleEditAddress(value) {
    handleAddressIndex(value);
  }
  async function getData() {
    await fetch(`http://localhost:5500/users/${user_id}/addresses`).then(
      async (d) => {
        let responseData = await d.json();
        setdata(responseData.user);
      }
    );
  }

  useEffect(() => {
    if (user_id !== "") {
      getData();
    }
  }, [user_id]);

  return (
    <div to="users/:id/address">
      <Link to="create">add an Address</Link>
      {data ? (
        <div>
          {data.address.map((el, index) => {
            return (
              <div key={nanoid(5)}>
                <h2>Address: {index + 1}</h2>
                <div>Line 1 {el.line_1}</div>
                <div>Line 2 {el.line_2}</div>
                <div>City{el.city} </div>
                <div>postalCode{el.postalCode}</div>
                <div>state{el.state}</div>
                <Link
                  to={`${index}/edit`}
                  onClick={(e) => {
                    handleEditAddress(index);
                  }}
                >
                  Edit Address
                </Link>
              </div>
            );
          })}

          {/* <Address add={userdetails._id} /> */}
        </div>
      ) : (
        <div>getting the data from the server</div>
      )}
    </div>
  );
};
