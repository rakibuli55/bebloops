import AuthLeftSvg from "@/components/AuthLeftSvg/AuthLeftSvg";
import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";

const AuthLayout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <section className=" h-[100vh] w-[100vw] overflow-y-auto  pb-[50px] flex flex-col items-center justify-center   overflow-x-hidden   ">
      <ScrollRestoration />
      {!["/auth/interest"].includes(pathName) ? (
        <div className="flex flex-row gap-x-[30px] 2xl:gap-x-[60px] px-[10px] xl:px-0 items-center">
          <AuthLeftSvg />
          <div className="mt-10 px-2 xl:px-0 ">
            <Outlet />
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default AuthLayout;
