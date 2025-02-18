

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import HomePage from "../pages/HomePage";
import MovementPage from "../pages/MovementPage";
import DonationPage from "../pages/DonationPage";
import PostDetailsPage from "../pages/PostDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children:[
        {
            path:"/home",
            element:<HomePage />,
        },
        {
            path:"/movement",
            element:<MovementPage />
        },
        {
            path:"/donation",
            element:<DonationPage />
        },
        {
            path:"/post/:id",
            element:<PostDetailsPage />
        },
    ]
    
  },
]);

export default router;
