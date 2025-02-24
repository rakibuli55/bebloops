import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import ActiveTabProvider from "./providers/ActiveTabProvider";
import SidebarProvider from "./providers/SidebarProvider";
import router from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <ActiveTabProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ActiveTabProvider>
    </SidebarProvider>
  </StrictMode>
);
