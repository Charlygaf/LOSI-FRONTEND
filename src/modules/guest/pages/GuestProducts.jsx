import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import env from "react-dotenv";
import { Container, Row } from "react-grid-system";
import ListedProduct from "../components/ListedProduct";

export default function GuestProducts() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,
      });

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

  return (
    <>
      <Header />
      <Container>
        <Row justify="center" className="center">
          {products?.map((product, index) => (
            <ListedProduct
              key={index}
              image={product.imageUrl}
              title={product.title}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
