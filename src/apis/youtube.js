import axios from "axios";

const KEY = "AIzaSyC2cIsM4BAFI3jLwZAs-IyaGsDN0LCdR4I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
