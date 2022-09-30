import axios from "axios";

const getMyChannelVieos = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_YYOUTUBE_CHANNELID}&part=snippet,id&order=date&maxResults=20
        `,
    });
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMyChannelVieos;
