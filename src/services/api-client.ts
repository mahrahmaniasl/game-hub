import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac99f873312b46599c3a11846d220a97",
  },
});
