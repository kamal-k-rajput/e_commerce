import React from "react";
import { useEffect, useState, useContext } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export const Users = () => {
  const [data, setdata] = useState([]);
  const { handleUser } = useContext(UserContext);
  async function getData() {
    await fetch("http://localhost:5500/users").then(async (d) => {
      let responseData = await d.json();
      setdata(responseData.users);
    });
  }
  function getUserDetails(value) {
    handleUser(value);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="users">
      <h3>Users List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr key={nanoid(5)}>
                <td>{el.name}</td>
                <td>{el.mobileNumber}</td>
                <td>
                  <Link
                    to={`/users/${el._id}`}
                    onClick={() => {
                      getUserDetails(el._id);
                    }}
                    prper={el._id}
                  >
                    get details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
