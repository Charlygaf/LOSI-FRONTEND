import React from "react";
import { Alert, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="row">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/products">Productos</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Header;
