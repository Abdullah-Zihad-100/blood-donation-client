import { Link, NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex  ">
        <div className="bg-rose-400  h-screen flex flex-col  gap-y-6 text-center">
          <Link to="/" className="text-3xl mx-4 my-5 font-semibold text-white">
            Admin Penal
          </Link>

          <NavLink
            to={"statistics"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-white underline px-4 py-2 bg-rose-300 w-full"
                : " text-white  px-4 py-2 w-full"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"manage-users"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-white underline px-4 py-2 bg-rose-300 w-full"
                : " text-white  px-4 py-2 w-full"
            }
          >
            Users Managment
          </NavLink>
          <NavLink
            to={"manage-reviews"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-white underline px-4 py-2 bg-rose-300 w-full"
                : " text-white  px-4 py-2 w-full"
            }
          >
            Manage Reviews
          </NavLink>
          <NavLink
            to={"donator-list"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-white underline px-4 py-2 bg-rose-300 w-full"
                : " text-white  px-4 py-2 w-full"
            }
          >
            Donator List
          </NavLink>
          <NavLink
            to={"donate-money"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold  text-white underline px-4 py-2 bg-rose-300 w-full"
                : " text-white  px-4 py-2 w-full"
            }
          >
            Money Donate
          </NavLink>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
