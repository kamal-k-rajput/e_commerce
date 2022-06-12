import React from "react";
import { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
export const BrandUpdate = () => {
  const history = createBrowserHistory();
  const realId = history.location.pathname.split("/")[2];
  const [data, setdata] = useState({});
  const [formdata, setformdata] = useState({
    brandName: "",
  });
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
  async function handleSubmit(e) {
    e.preventDefault();
    const headerOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    await fetch(`http://localhost:5500/brands/${realId}/edit`, headerOptions);
    console.log(formdata);
    getData();
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }
  return (
    <div>
      <div>
        <h2>Previous data</h2>
        <div>Brand Name:{data.brandName}</div>
      </div>
      <h2>Edit Details</h2>

      <form onSubmit={handleSubmit}>
        <label>
          New Brand Name:
          <input
            type="text"
            name="brandName"
            onChange={handleChange}
            placeholder="Enter Brand name"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
