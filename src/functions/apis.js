import axios from "axios";
import env from "react-dotenv";

export default axios.create({
  baseURL: env.API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authorization")}`,
  },
});
