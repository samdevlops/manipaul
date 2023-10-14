import { Navigate, createHashRouter } from "react-router-dom";
import { NavigationBar } from "../components/navigation-bar";
import {
  AboutPage,
  BookingPage,
  ContactPage,
  ErrorPage,
  HomePage,
  InfoPage,
} from "../pages";

const allRoutes = createHashRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Navigate to="home" /> },
          { path: "home", element: <HomePage /> },
          { path: "about", element: <AboutPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "info", element: <InfoPage /> },
          { path: "booking", element: <BookingPage /> },
          { path: "*", element: <ErrorPage /> },
        ],
      },
    ],
  },
]);

export default allRoutes;
