import React from "react";
import { Routes, Route } from "react-router-dom";
import GuestHome from "./modules/guest/pages/GuestHome";
import GuestProducts from "./modules/guest/pages/GuestProducts";
import GuestArt from "./modules/guest/pages/GuestArt";
import GuestRandom from "./modules/guest/pages/GuestRandom";
import "./App.less";
import "antd/dist/antd.less";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestHome />} />
      <Route path="/random" element={<GuestRandom />} />

      <Route path="/products" element={<GuestProducts />} />
      <Route path="/art" element={<GuestArt />} />
    </Routes>
  );
}

export default App;
