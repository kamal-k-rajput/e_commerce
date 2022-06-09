import { createContext, useState } from "react";

const BrandContext = createContext();

const BrandContextProvider = ({ children }) => {
  const [brand_id, setBranddetails] = useState("");

  const handleBrand = (value) => {
    setBranddetails(value);
  };

  return (
    <BrandContext.Provider value={{ brand_id, handleBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export { BrandContext, BrandContextProvider };
