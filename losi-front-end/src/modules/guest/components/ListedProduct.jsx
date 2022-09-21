import React from "react";
import { Image } from "antd";

function ListedProduct(product) {
  return (
    <div className="col-1">
      <Image height={100} src={`${product.imageUrl}`} />
      <p>{product.title}</p>
    </div>
  );
}

export default ListedProduct;
