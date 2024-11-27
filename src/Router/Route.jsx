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

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
        { path: "donators", element: <Donators /> },
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
  ],
  {
    future: {
      v7_startTransition: true, // For startTransition optimization
      v7_skipActionErrorRevalidation: true, // Skip revalidation after action errors
    },
  }
);

export default route;
