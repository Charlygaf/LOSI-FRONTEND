import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import env from "react-dotenv";
import { Container, Row } from "react-grid-system";
import ListedProduct from "../components/ListedProduct";

export default function GuestArt() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}arts`,
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
          {products?.map((art, index) => (
            <ListedProduct key={index} image={art.imageUrl} title={art.title} />
          ))}
        </Row>
      </Container>
    </>
  );
}
