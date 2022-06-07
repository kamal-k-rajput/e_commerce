import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user_id, setuserdetails] = useState("");

  const handleUser = (value) => {
    setuserdetails(value);
  };

  return (
    <UserContext.Provider value={{ user_id, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
