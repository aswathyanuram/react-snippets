import axios from "axios";
import React, { useEffect, useState } from "react";
import "./products.css";

export default function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="products">
      {data.map((item) => {
        return <div className="product">{item.title}</div>;
      })}
    </div>
  );
}
