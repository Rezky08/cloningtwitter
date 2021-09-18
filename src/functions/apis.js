import axios from "axios";
// const baseURL = "https://cloningtwitterapi.herokuapp.com/";
const baseURL = "http://localhost:5000/";

export default axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authorization")}`,
  },
});
