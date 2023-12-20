import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://universities.hipolabs.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosIntance;
