import axios from "axios";
import { useEffect, useState } from "react";

function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    async function fetchData() {
     try {
        const res = await axios.get<T>(
          `http://localhost:3000/api/${endpoint}`
        );
        setData(res.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 404) {
            console.log(`There is no endpoint ${endpoint}`);
          } else {
            console.log("Failed to fetch data (Axios Error)");
          }
        } else {
          console.log("Failed to fetch data");
        }
      }
    }
    fetchData();
  }, [endpoint]);
  return data;
}

export default useApi;
