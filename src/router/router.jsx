import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import HomePage from "../pages/HomePage";
import MovementPage from "../pages/MovementPage";
import DonationPage from "../pages/DonationPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import AuthLayout from "@/Layout/AuthLayout";
import AuthHome from "@/pages/AuthPages/AuthHome";
import AuthLogin from "@/pages/AuthPages/AuthLogin";
import AuthUserSelection from "@/pages/AuthPages/AuthUserSelection";
import AuthPersonalInfo from "@/pages/AuthPages/AuthPersonalInfo";
import AuthOrganizationInfo from "@/pages/AuthPages/AuthOrganizationInfo";
import AuthCratePass from "@/pages/AuthPages/AuthCratePass";
import AuthProfilePic from "@/pages/AuthPages/AuthProfilePic";
import AuthInterest from "@/pages/AuthPages/AuthInterest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
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
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "home",
        element: <AuthHome />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "user-selection",
        element: <AuthUserSelection />,
      },
      {
        path: "personal-info",
        element: <AuthPersonalInfo />,
      },
      {
        path: "organazition-info",
        element: <AuthOrganizationInfo />,
      },
      {
        path: "create-pass",
        element: <AuthCratePass />,
      },
      {
        path: "choose-profile-pic",
        element: <AuthProfilePic />,
      },
      {
        path: "interest",
        element: <AuthInterest />,
      },
    ],
  },
]);

export default router;
