import axios from "axios";

const api = axios.create({
  baseURL: "https://api-capstone-g5.herokuapp.com/",
});

export default api;
