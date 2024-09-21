import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUS from "./components/ContactUS";
// import About from "./components/About";  REMOVE THIS
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";  we will have to REMOVE THIS

const Grocery = lazy(() => import("./components/Grocery")); // ADD THIS
const About = lazy(()=> import("./components/About")); // ADD THIS

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
        path: "/",
        element: <Body/>
      },
      {
        path: "about",
        element: <Suspense fallback={<h1>Loading About...</h1>}><About /></Suspense>,
      },
      {
        path: "contact",
        element: <ContactUS />,
      },
      {
        path: "grocery",
        element: <Suspense fallback={<h1>Loading Grocery...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>,
  },
]);
//define what will happen at a specific route, it takes a configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //Root Level Component
