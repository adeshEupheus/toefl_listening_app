import axios from "axios";

const localinstance = axios.create({
  // baseURL: "https://e6fd-117-207-182-6.ngrok-free.app/",
  baseURL: "https://toeflbackend.skool.ai/",
});

export default localinstance;
