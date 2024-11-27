import { useContext } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";


const useAuth = () => {
    return useContext(AuthContaxt)
}
export default useAuth;

