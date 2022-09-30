import React from "react";
import { Alert, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-grid-system";

function Header() {
  return (
    <Container fluid>
      <Row justify="center">
        <Col className="textCenter" style={{ height: "50px" }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/products">Shop</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/art">Artss</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/videos">Videos</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
