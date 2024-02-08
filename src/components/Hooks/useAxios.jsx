import axios from 'axios'
const baseApi = axios.create({ baseURL: "http://localhost:5000" });

const useBaseAPI = () => {
    return [baseApi];
};

export default useBaseAPI;