import axios from "axios";

const serverReq = axios.create({
  baseURL: "http://localhost:5000",
});
const useServer = () => {
  return { serverReq };
};

export default useServer;
