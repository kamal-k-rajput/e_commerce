import { createContext, useState } from "react";

const AddressContext = createContext();

const AddressContextProvider = ({ children }) => {
  const [address_idx, setaddress_idx] = useState(0);

  const handleAddressIndex = (value) => {
    setaddress_idx(value);
  };
  return (
    <AddressContext.Provider value={{ address_idx, handleAddressIndex }}>
      {children}
    </AddressContext.Provider>
  );
};
export { AddressContext, AddressContextProvider };
