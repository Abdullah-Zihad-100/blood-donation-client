import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Donators from "../Pages/Donators";
import DonarDetails from "../Components/DonarDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PriveteRoute from "../Provider/PriveteRoute";
import DonatorsAdd from "../Pages/DonatorsAdd";
import MyProfile from "../Pages/MyProfile";
import EditDonator from "../Pages/EditDonator";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ManageReviews from "../Pages/Dashboard/ManageReviews";
import DonatorList from "../Pages/Dashboard/DonatorList";
import Statistics from "../Pages/Dashboard/Statistics";
import Reviews from "../Pages/Reviews";
import AdminRoute from "../Provider/AdminRoute";
import Payment from "../Components/Payment";
import MoneyDonate from "../Pages/Dashboard/MoneyDonate";

const route = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
        { path: "donators", element: <Donators /> },
        { path: "reviews", element: <Reviews /> },
        {
          path: "donators/details/:id",
          loader: ({ params }) => fetch(`/donors/${params.id}`),
          element: (
            <PriveteRoute>
              <DonarDetails />
            </PriveteRoute>
          ),
        },

        {
          path: "donators-add",
          element: (
            <PriveteRoute>
              <DonatorsAdd />
            </PriveteRoute>
          ),
        },
        {
          path: "payment",
          element: (
            <PriveteRoute>
              <Payment />
            </PriveteRoute>
          ),
        },
        // donator route--------->
        {
          path: "my-profile",
          element: (
            <PriveteRoute>
              <MyProfile />
            </PriveteRoute>
          ),
        },
        {
          path: "edit-profile",
          element: (
            <PriveteRoute>
              <EditDonator />
            </PriveteRoute>
          ),
        },

        // auth releted router
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      ),
      children: [
        {
          path: "statistics",
          element: (
            <AdminRoute>
              <Statistics />
            </AdminRoute>
          ),
        },
        {
          path: "donate-money",
          element: (
            <AdminRoute>
              <MoneyDonate />
            </AdminRoute>
          ),
        },
        {
          path: "manage-users",
          element: (
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          ),
        },
        {
          path: "manage-reviews",
          element: (
            <AdminRoute>
              <ManageReviews />
            </AdminRoute>
          ),
        },
        {
          path: "donator-list",
          element: (
            <AdminRoute>
              <DonatorList />
            </AdminRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // For startTransition optimization
      v7_skipActionErrorRevalidation: true, // Skip revalidation after action errors
    },
  }
);

export default route;
