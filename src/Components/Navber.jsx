import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
import logo from "../../public/logo.png";
import useAuth from "../Hooks/useAuth";

const Navber = () => {
  const {user,logout}=useAuth();
      const [isOpen, setIsOpen] = useState(false);


      const handleLogout =()=>{
        logout()
      }

    return (
      <div className="bg-gradient-to-r from-rose-300 to-rose-500 p-1 rounded  sticky top-0 z-10">
        <div className="flex justify-between max-w-[1260px] mx-auto items-center">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <img src={logo} className="w-12 m-2" alt="Logo" />
            <h2 className="text-2xl font-semibold leading-7 text-white">
              Compact <br />
              Blood Donation
            </h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 mx-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-white underline"
                  : " text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg underline text-white"
                  : " text-white"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to={"/donators"}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-white underline"
                  : " text-white"
              }
            >
              Donators
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-white underline"
                  : " text-white"
              }
            >
              Contact Us
            </NavLink>
            {user ? (
              <button onClick={handleLogout} className="bg-rose-400 rounded shadow-lg px-4 py-3 text-white font-semibold onClick={handleLogout">Logout</button>
            ) : (
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg text-white underline"
                    : " text-white"
                }
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white text-2xl cursor-pointer">
            {isOpen ? (
              <IoClose onClick={() => setIsOpen(false)} />
            ) : (
              <IoMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute flex flex-col bg-white text-rose-500 rounded-lg shadow-lg p-4 w-1/4 mx-auto space-y-2 right-0 top-16 z-10 md:hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg text-blue-500 underline" : " "
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg" : " "
              }
            >
              About Us
            </NavLink>
            <NavLink
              to={"/donators"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg" : ""
              }
            >
              Donators
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg" : ""
              }
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    );
}
export default Navber;