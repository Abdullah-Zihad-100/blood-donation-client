
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getRole } from "../apis/auth";

const useRole = () => {
  const { user, loading } = useAuth();
  const { data: role, isLoading } = useQuery({
    enabled: loading && !!user?.email,
    queryKey: ["role"],
    queryFn: async () => await getRole(user?.email),
  });
  return [role, isLoading];
};
export default useRole;
