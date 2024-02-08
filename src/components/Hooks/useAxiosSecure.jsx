// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useAxiousSecure = () => {
//   const { data, refetch, isLoading } = useQuery({
//     queryKey: ["PublicData"],
//     queryFn: async () => {
//       try {
//         const response = await axios.get("http://localhost:5000");
//         return response.data;
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   });
//   return [data, refetch, isLoading];
// };

// export default useAxiousSecure;
import axios from "axios";
import { useEffect } from "react";

const secureReq = axios.create({
  baseURL: "https://api-repliq-commerce.vercel.app",
});

const useServerSecure = () => {
  useEffect(() => {
    secureReq.interceptors.request.use((req) => {
      const token = localStorage.getItem("RepliqCommerceToken");
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    secureReq.interceptors.response.use(
      (res) => res,
      async (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  return { secureReq };
};

export default useServerSecure;
