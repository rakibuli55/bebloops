import AuthLeftSvg from "@/components/AuthLeftSvg/AuthLeftSvg";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";

const AuthLayout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <section className="h-[100vh] w-[100vw] flex items-center justify-center flex-col gap-y-10  ">
      {!["/auth/home", "/auth/user-selection"].includes(pathName) && (
        <img
          src={logo}
          className="w-[320px] h-[90px] object-cover "
          alt="not found"
        />
      )}

      {!["/auth/interest"].includes(pathName) ? (
        <div className="flex flex-row gap-x-[60px] items-center">
          <AuthLeftSvg />
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default AuthLayout;
