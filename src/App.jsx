import React from "react";
import { Routes, Route } from "react-router-dom";
import GuestHome from "./modules/guest/pages/GuestHome";
import GuestProducts from "./modules/guest/pages/GuestProducts";
import GuestArt from "./modules/guest/pages/GuestArt";
import GuestRandom from "./modules/guest/pages/GuestRandom";
import GuestVideos from "./modules/guest/pages/GuestVideos";
import { Col, Row, Image } from "antd";
import logoWeb from "./img/logo-web.png";
import "./App.less";
import "antd/dist/antd.less";

function App() {
  return (
    <>
      <Row className="center">
        {" "}
        <Col>
          <Image height={100} src={logoWeb} alt="main logo" />
          <Routes>
            <Route path="/" element={<GuestHome />} />
            <Route path="/random" element={<GuestRandom />} />
            <Route path="/videos" element={<GuestVideos />} />
            <Route path="/products" element={<GuestProducts />} />
            <Route path="/art" element={<GuestArt />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
