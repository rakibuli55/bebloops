import React from "react";
import SiteLogo from "../../assets/images/logo/logo.svg";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { AppleLogo, GoogleLogo } from "@/components/Svg/Svg";
import { Link, useNavigate } from "react-router-dom";

const AuthHome = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col h-auto w-auto p-10 border-[1px] border-solid bg-white border-[#BDBDBD] rounded-[10px] ">
      <div className="my-[60px] flex flex-col gap-y-[53px] items-center ">
        <img
          src={SiteLogo}
          className="w-[213px] h-[60px] object-cover cursor-default block "
          alt="not found"
        />
        <div className="flex flex-col gap-y-10 items-center ">
          <h3 className="text-lg font-meduim leading-[150%]  text-defaultGray  ">
            Let’s Get You Started With Bebloops
          </h3>
          <div className="flex flex-col gap-y-5 items-center ">
            <div className="flex flex-col gap-y-[18px]">
              <div className="flex flex-row items-center gap-x-6 px-6 py-[14px] border-[1px] border-solid border-[#DADADA] rounded-[12px] cursor-pointer ">
                <GoogleLogo />
                <span className="common-para-one ">
                  Sign In Using Google Account
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-6 px-6 py-[14px] border-[1px] border-solid border-[#DADADA] rounded-[12px] cursor-pointer ">
                <AppleLogo />
                <span className="common-para-one ">
                  Sign In Using Apple Account
                </span>
              </div>
              <AuthButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/auth/user-selection");
                }}
                Type={"submit"}
                Text={"Sign in with another email"}
              />
            </div>
            <h4 className=" text-defaultGray  font-medium font-Urbanist leading-[160%] ">
              Already have a account?{" "}
              <Link
                to={"/auth/login"}
                className="font-montserrat text-primaryGreen leading-[150%] cursor-pointer "
              >
                Login
              </Link>{" "}
            </h4>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthHome;
