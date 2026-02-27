import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://bharatworks-1.onrender.com",
  withCredentials: true,
});

export default newRequest;
