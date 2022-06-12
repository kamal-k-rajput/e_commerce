import { createContext } from "react";

const UrlContext = createContext();

const UrlContextProvider = ({ children }) => {
  const baseUrl = "http://localhost:5500";

  return (
    <UrlContext.Provider value={{ baseUrl }}>{children}</UrlContext.Provider>
  );
};

export { UrlContext, UrlContextProvider };
