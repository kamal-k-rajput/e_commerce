import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";
import { ProductCard } from "./ProductCard";
export const ProductOne = () => {
  const history = createBrowserHistory();
  const [available, setavailable] = useState(false);
  let realId = history.location.pathname.split("/")[2];
  // console.log(realId);
  const [data, setdata] = useState({});
  useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:5500/products/${realId}`).then(
        async (response) => {
          let res = await response.json();
          setdata(res.product);
          setavailable(true);
          console.log(res.product);
          console.log("data fetch complete");
        }
      );
    };
    if (realId) {
      getData();
    }
  }, [realId]);

  return (
    <div>
      {console.log("re render")}
      {available ? <ProductCard data={data} /> : <div>Loading...</div>}
    </div>
  );
};
