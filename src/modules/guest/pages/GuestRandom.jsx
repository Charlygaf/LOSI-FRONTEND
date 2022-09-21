import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import env from "react-dotenv";
import { Container, Row } from "react-grid-system";
import ListedProduct from "../components/ListedProduct";

export default function GuestRandom() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}content`,
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
          {products?.map((item, index) => (
            <ListedProduct
              key={index}
              image={item.imageUrl}
              title={item.title}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
