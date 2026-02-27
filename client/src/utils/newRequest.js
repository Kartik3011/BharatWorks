import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://bharatworks-1.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
