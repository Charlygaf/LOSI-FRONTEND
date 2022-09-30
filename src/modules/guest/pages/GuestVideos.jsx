import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Container, Row, Col } from "react-grid-system";
import Card from "antd/lib/card/Card";
import YoutubeEmbed from "../components/YtVideo";
import ListedVideos from "../components/ListedVideos";

export default function GuestVideos() {
  const [videos, setvideos] = useState([]);

  const getMyChannelVieos = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://youtube.googleapis.com/youtube/v3/search?channelId=UC_mWwfR4quoI36yc5NGvWIg&type=video&key=AIzaSyBXD0LgRSB8rA69HhCie9Hb_M00448DG-M",
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMyChannelVieos().then((data) => {
      setvideos(data.items.map((item) => item.id.videoId));
    });
    console.log(videos);
  }, [videos]);

  return (
    <>
      <Header />
      <Container>
        <Row justify="center">
          {videos?.map((video) => (
            <Col xs={12}>
              <div className="textCenter">
                <Card size="small" hoverable bordered={false}>
                  {" "}
                  <ListedVideos video={video} />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
