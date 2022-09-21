import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import YoutubeEmbed from "../components/YtVideo";
export default function GuestHome() {
  return (
    <div className="row center">
      <div className="col-6">
        <h1 className="logoText">LOSI</h1>
        <YoutubeEmbed embedId={"MYSP8-rhnSk"} videoTitle={"losi 1"} />
        <Link to="/random">home</Link>
      </div>
    </div>
  );
}
