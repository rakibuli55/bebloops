import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import DonationPage from "../pages/DonationPage";
import HomePage from "../pages/HomePage";
import MovementPage from "../pages/MovementPage";
import MovementSinglePage from "../pages/MovementSinglePage";
import PostDetailsPage from "../pages/PostDetailsPage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "@/pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/movement",
        element: <MovementPage />,
      },
      {
        path: "/donation",
        element: <DonationPage />,
      },
      {
        path: "/post/:id",
        element: <PostDetailsPage />,
      },
      {
        path: "/movement/:id",
        element: <MovementSinglePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
