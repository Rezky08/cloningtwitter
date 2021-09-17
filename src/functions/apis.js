import axios from "axios";
const baseURL = "https://cloningtwitterapi.herokuapp.com/";

export default axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("authorization")}`,
  },
});
