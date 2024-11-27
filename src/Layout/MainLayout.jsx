import { Outlet } from "react-router";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navber />
       <Outlet />
       <Footer/>
    </div>
  );
};
export default MainLayout;
