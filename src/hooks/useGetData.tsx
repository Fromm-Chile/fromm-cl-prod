import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../assets/variables";
import axios from "axios";

interface UseFetchProps {
  name: string;
  params: Record<string, any>;
  endpoint: string;
}

export const useGetData = ({ name, params, endpoint }: UseFetchProps) => {
  const data = useQuery({
    queryKey: [name, params],
    queryFn: async (): Promise<any> => {
      const response = await axios(`${apiUrl}/${endpoint}`, {
        method: "GET",
        params,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  return { data };
};
