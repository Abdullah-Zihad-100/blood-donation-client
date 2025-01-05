import { Outlet } from "react-router";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";
import { setupAxiosInterceptors } from "../apis";
const MainLayout = () => {


    const { logout } = useAuth();

    useEffect(() => {
      // Set up the Axios interceptors with the logout function
      setupAxiosInterceptors(logout);
    }, [logout]);

  return (
    <div>
      <Navber />
       <Outlet />
       <Footer/>
    </div>
  );
};
export default MainLayout;
