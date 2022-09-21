import React from "react";
import { Routes, Route } from "react-router-dom";
import GuestHome from "./modules/guest/pages/GuestHome";
import GuestProducts from "./modules/guest/pages/GuestProducts";
import "./App.less";
import "antd/dist/antd.less";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestHome />} />
      <Route path="/products" element={<GuestProducts />} />
    </Routes>
  );
}

export default App;
