import React from "react";
import { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

export const BrandOne = () => {
  const history = createBrowserHistory();
  let realId = history.location.pathname.split("/")[2];
  const [data, setdata] = useState({});
  useEffect(() => {
    async function getData() {
      await fetch(`http://localhost:5500/brands/${realId}`).then(async (d) => {
        let responseData = await d.json();
        console.log(responseData, "response");
        setdata(responseData.brand);
      });
    }
    getData();
  }, [realId]);

  return (
    <div>
      <h2>Brand Details</h2>
      {data ? (
        <div>
          <div>Brand Name {data.brandName}</div>
          <Link to="edit">Edit Brand details</Link>
        </div>
      ) : (
        <div>getting the data from the server</div>
      )}
    </div>
  );
};
