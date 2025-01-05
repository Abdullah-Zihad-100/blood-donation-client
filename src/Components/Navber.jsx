import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import logo from "../../public/logo.png";
import useAuth from "../Hooks/useAuth";
import { clearCookies } from "../apis/auth";
import useRole from "../Hooks/useRole";
import defaultPhoto from "../assets/defaultPhoto.jpg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navber = () => {

  const { t } = useTranslation();


  const [role] = useRole();
  console.log("role---->",role?.role);
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    logout();
    await clearCookies();
  };

  return (
    <div className="bg-gradient-to-r from-rose-300 to-rose-500 p-1 rounded sticky top-0 z-10">
      <div className="flex justify-between max-w-[1260px] mx-auto items-center">
        {/* Logo */}
        <Link to={"/"} className="flex items-center flex-1">
          <img src={logo} className="w-12 m-2" alt="Logo" />
          <h2 className="text-2xl font-semibold leading-7 text-white">
            Compact <br />
            Blood Donation
          </h2>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 mx-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg text-white underline"
                : "text-white"
            }
          >
            {t("header.home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg text-white underline"
                : "text-white"
            }
          >
            {t("header.aboutUs")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg text-white underline"
                : "text-white"
            }
          >
            {t("header.contactUs")}
          </NavLink>
          <NavLink
            to="/donators"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg text-white underline"
                : "text-white"
            }
          >
            {t("header.donators")}
          </NavLink>
          {user && (
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-white underline"
                  : "text-white"
              }
            >
              {t("header.reviews")}
            </NavLink>
          )}
          {role?.role === "admin" && (
            <NavLink
              to="/dashboard/statistics"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-white underline"
                  : "text-white"
              }
            >
              {t("userProfile.dashboard")}
            </NavLink>
          )}
          {user ? (
            role?.role !== "donator" &&
            role?.role !== "admin" && (
              <button
                onClick={handleLogout}
                className="bg-rose-400 rounded shadow-lg px-4 py-3 text-white font-semibold"
              >
                {t("userProfile.logout")}
              </button>
            )
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-white underline"
                  : "text-white"
              }
            >
              {t("header.login")}
            </NavLink>
          )}
        </div>

        {/* User Profile Dropdown */}
        {user && (role?.role === "donator" || role?.role === "admin") && (
          <div className="dropdown dropdown-end mx-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user?.photoURL || defaultPhoto} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-lg font-semibold rounded z-[1] mt-3 w-52 p-2 shadow bg-white text-red-400"
            >
              <li className="text-sm ms-3 text-black font-normal">
                {t("userProfile.userName")}: {user?.displayName}
              </li>
              <li>
                {role?.role === "donator" ? (
                  <>
                    <NavLink
                      to="/my-profile"
                      className={({ isActive }) =>
                        isActive
                          ? "font-semibold text-lg underline text-red-400"
                          : "text-rose-400"
                      }
                    >
                      {t("userProfile.myProfile")}
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="bg-rose-400 rounded shadow-lg text-white font-semibold"
                    >
                      {t("userProfile.logout")}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="bg-rose-400 rounded shadow-lg px-4 py-3 text-white font-semibold"
                  >
                    {t("userProfile.logout")}
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}

        {/* <button className="text-white text-lg mx-2">
          <TbWorld />

        </button> */}

        <LanguageSwitcher></LanguageSwitcher>

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
        <div className="absolute flex flex-col bg-white text-rose-500 rounded-lg shadow-lg p-4 w-1/3 mx-auto space-y-2 right-0 top-16 z-10 md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-lg text-rose-500 underline" : ""
            }
          >
            {t("header.home")}
          </NavLink>
          {user && (
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg text-rose-500 underline" : ""
              }
            >
              {t("header.reviews")}
            </NavLink>
          )}
          {role?.role === "admin" && (
            <NavLink
              to="/dashboard/statistics"
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg text-rose-500 underline" : ""
              }
            >
              {t("userProfile.dashboard")}
            </NavLink>
          )}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold text-lg" : ""
            }
          >
            {t("header.aboutUs")}
          </NavLink>
          <NavLink
            to="/donators"
            className={({ isActive }) =>
              isActive ? "font-semibold text-lg" : ""
            }
          >
            {t("header.donators")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-semibold text-lg" : ""
            }
          >
            {t("header.contactUs")}
          </NavLink>

          {user ? (
            role?.role !== "donator" &&
            role?.role !== "admin" && (
              <button
                onClick={handleLogout}
                className="bg-rose-400 rounded shadow-lg py-1 text-white font-semibold"
              >
                Logout
              </button>
            )
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-rose-500 underline"
                  : "text-rose-500"
              }
            >
              {t("header.login")}
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navber;
