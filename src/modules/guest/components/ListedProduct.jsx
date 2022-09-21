import React from "react";
import Card from "antd/lib/card/Card";
import Col from "antd/es/grid/col";

function ListedProduct({ image, title }) {
  console.log(image);

  return (
    <Col>
      <Card hoverable bordered={false}>
        <img height={300} src={image} alt="hola" />
        <p>{title}</p>
      </Card>
    </Col>
  );
}

export default ListedProduct;
