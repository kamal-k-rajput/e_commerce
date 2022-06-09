import React from "react";
import { useEffect, useState, useContext } from "react";
import { BrandContext } from "../../../context/BrandContext";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

export const BrandOne = () => {
  const { brand_id } = useContext(BrandContext);
  const [id, setid] = useState("");
  const history = createBrowserHistory();
  let realId = history.location.pathname.split("/")[2];

  const [data, setdata] = useState({});

  async function getData() {
    await fetch(`http://localhost:5500/brands/${realId}`).then(async (d) => {
      let responseData = await d.json();
      console.log(responseData, "response");
      setdata(responseData.brand);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Brand Details</h2>
      {console.log(data, "data")}
      {data ? (
        <div>
          <div>Brand Name {data.brandName}</div>
          <Link to="edit">Edit Brand details</Link>

          {/* <Link to="addresses">See Addresses</Link> */}
        </div>
      ) : (
        <div>getting the data from the server</div>
      )}
    </div>
  );
};
