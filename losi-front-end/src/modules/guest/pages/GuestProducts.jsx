import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import ListedProduct from "../components/ListedProduct";

export default function GuestProducts() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_APP_API_URL}products`
      );
      console.log(process.env.REACT_APP_APP_API_URL);
      console.log("teste2", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  console.log("Guest Prodocts render");

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <ListedProduct product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
