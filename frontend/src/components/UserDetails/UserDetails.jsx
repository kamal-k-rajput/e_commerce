import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const UserDetails = () => {
  const [data, setdata] = useState();
  const { user_id } = useContext(UserContext);
  async function getData() {
    await fetch(`http://localhost:5500/users/${user_id}`).then(async (d) => {
      let responseData = await d.json();
      console.log(user_id, "userid");
      console.log(responseData.user, "inuserdetails");
      setdata(responseData.user);
    });
  }

  useEffect(() => {
    if (user_id !== "") {
      getData();
    }
  }, [user_id]);
  return (
    <div to="users/:id">
      <h2>User Details</h2>
      {data ? (
        <div>
          <div>NAME: {data.name}</div>
          <div>MOBILE NO. {data.mobileNumber}</div>
          <Link to="edit">Edit user details</Link>
          <h4>addresses:</h4>

          {/* <Address add={userdetails._id} /> */}
          <Link to="addresses">See Addresses</Link>
        </div>
      ) : (
        <div>getting the data from the server</div>
      )}
    </div>
  );
};
