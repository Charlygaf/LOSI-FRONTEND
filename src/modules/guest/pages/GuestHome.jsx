import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { Image, Space } from "antd";
import YoutubeEmbed from "../components/YtVideo";
import logoWeb from "../../../img/logo-web.png";
export default function GuestHome() {
  return (
    <>
      <Row justify="center" align="middle" style={{ marginTop: 100 }}>
        <Col xs={6} className="center">
          <YoutubeEmbed embedId={"MYSP8-rhnSk"} videoTitle={"losi 1"} />
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ marginTop: 100 }}>
        <Col xs={6} className="center">
          <Link to="/random" className="logoTest">
            ENTRAR >>>{" "}
          </Link>
        </Col>
      </Row>{" "}
    </>
  );
}
