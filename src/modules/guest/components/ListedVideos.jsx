import React, { useState, useEffect } from "react";
import axios from "axios";
import YoutubeEmbed from "../components/YtVideo";

function ListedVideos(video) {
  const [videoDetails, setvideoDetails] = useState();

  const getVideoDetails = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video}&key=AIzaSyBXD0LgRSB8rA69HhCie9Hb_M00448DG-M`,
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getVideoDetails().then((data) => {
      setvideoDetails(data);
      console.log(videoDetails);
    });
  }, [videoDetails]);

  return <YoutubeEmbed embedId={video} />;
}

export default ListedVideos;
