import { SidebarContext } from "@/context";
import { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { RiHome6Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";

const sidebarMenu = [
  { name: "home", icon: <RiHome6Fill />, path: "/home" },
  { name: "movement", icon: <FaUsers />, path: "/movement" },
  { name: "inbox", icon: <LuMessageCircleMore />, path: "/inbox" },
  { name: "profile", icon: <FaRegUser />, path: "/profile" },
];

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <div
      className={`w-[340px] custom-2xl:w-[260px] custom-xl:w-[260px] custom-lg:w-[260px] fixed top-0 left-0 py-9 custom-2xl:pt-6 custom-xl:pt-6 custom-lg:pt-6 min-h-screen z-[50] bg-white max-md:z-[30] max-md:w-[240px] max-md:pt-[93px] duration-200 ease-in-out ${
        isSidebarOpen ? "max-md:left-0" : "max-md:left-[-240px]"
      }`}
    >
      <div>
        {/* header  */}
        <Link
          to={"/home"}
          className="inline-block pl-[65px] pr-[129px] custom-2xl:pr-[50px] custom-xl:pr-[50px] custom-lg:pr-[50px] pb-[50px] custom-2xl:pl-[25px] custom-2xl:pb-8 custom-xl:pl-[25px] custom-xl:pb-8 custom-lg:pl-[25px] custom-lg:pb-8 max-md:hidden"
        >
          <img className="w-[146px] h-[41px]" src={Logo} alt="" />
        </Link>
        <ul className="pr-1 sidebar-menu overflow-y-scroll h-[calc(100vh-200px)]">
          {sidebarMenu.map((item) => (
            <li key={item?.name}>
              <NavLink
                to={item?.path}
                className="sidebar-menu-link capitalize text-themeBlack py-[14px] px-[60px] custom-2xl:px-6 custom-2xl:py-3 custom-2xl:text-[18px] custom-xl:px-6 custom-xl:py-3 max-md:py-2 custom-xl:text-[18px] max-md:text-[17px] max-md:px-5 custom-lg:px-6 custom-lg:py-3 custom-lg:text-[18px] flex items-center gap-[14px] w-full text-[20px] font-medium duration-200 ease-in-out hover:bg-primaryLight rounded-tr-[8px] rounded-br-[8px] hover:text-primaryColor"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="text-[22px] custom-2xl:text-[20px] custom-xl:text-[20px] custom-lg:text-[20px] max-md:text-[18px] text-sidebarIconColor duration-200 ease-in-out">
                  {item?.icon}
                </span>
                <p>{item?.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
