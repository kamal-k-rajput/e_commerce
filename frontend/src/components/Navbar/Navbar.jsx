import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div>

      <Link to="users">get all users</Link>
      </div>
      <Link to="users/create">Create a new User</Link>
    </>
  );
};
