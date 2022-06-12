import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { BrandContext } from "../../../context/BrandContext";
export const Brands = () => {
  const [data, setdata] = useState([]);
  // [Brand_id, setBranddetails];
  const { setBranddetails } = useContext(BrandContext);
  async function getData() {
    await fetch("http://localhost:5500/brands").then(async (d) => {
      let responseData = await d.json();
      setdata(responseData.brands);
    });
  }
  function getBrandDetails(value) {
    setBranddetails(value);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>All Brands Name</h2>
      <table>
        <thead>
          {console.log(data, "brands data")}
          <tr>
            <th>Availabe Brands</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr key={nanoid(5)}>
                <td>{el.brandName}</td>
                <td>
                  <Link
                    to={`/brands/${el._id}`}
                    onClick={() => {
                      console.log(el._id);
                      getBrandDetails(el._id);
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
