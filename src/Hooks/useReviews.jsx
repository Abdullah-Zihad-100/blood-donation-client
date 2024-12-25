import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../apis/auth";

const useReviews = () => {
    const { data, isLoading,refetch } = useQuery({
      queryKey: ["reviews"],
      queryFn: async () => {
        const res = await getReviews();
        return res;
      },
    });


    return [data,isLoading,refetch]
}
export default useReviews;