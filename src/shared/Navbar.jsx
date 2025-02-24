import { SidebarContext, TabContext } from "@/context";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline, IoNotifications } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import ProfileAvatar from "../assets/images/profile-avatar.png";
import NotificationCard from "../components/Navbar/NotificationCard";

const notificationData = [
  {
    id: 1,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    status: "unread",
  },
  {
    id: 2,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message: "You've this month! Keep it up",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "read",
  },
  {
    id: 3,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    status: "read",
  },
  {
    id: 4,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message:
      "Someone commented on your post: Around Heavy ball floor these languag...",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "unread",
  },
  {
    id: 5,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "read",
  },
  {
    id: 6,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message:
      "Someone commented on your post: Around Heavy ball floor these languag...",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "unread",
  },
  {
    id: 7,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    status: "read",
  },
  {
    id: 8,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message:
      "Someone commented on your post: Around Heavy ball floor these languag...",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "unread",
  },
];

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const notificationButtonRef = useRef(null);
  const profileButtonRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  const handleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { setDefaultTab } = useContext(TabContext);

  const handleProfileMenuClick = () => {
    setDefaultTab("profile");
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target) &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }

      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
      if (window.innerWidth < 991) {
        if (
          isMobileSearch &&
          searchInputRef.current &&
          !searchInputRef.current.contains(event.target) &&
          searchButtonRef.current &&
          !searchButtonRef.current.contains(event.target)
        ) {
          setIsMobileSearch(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen, isProfileOpen, isMobileSearch]);

  return (
    <header className="fixed top-0 left-0 w-full py-9 custom-2xl:py-6 custom-xl:py-6 custom-lg:py-5 bg-white flex items-center justify-between pr-[60px] custom-2xl:pr-5 custom-xl:pr-5 custom-lg:pr-4 z-[40] max-md:pr-5 max-md:py-4 max-md:pl-5 custom-xs:!px-4 custom-xs:!py-[10px]">
      <div className="opacity-0 invisible max-md:visible max-md:opacity-100 flex items-center gap-4 custom-xs:gap-3">
        <Link to={"/"}>
          <img
            src={Logo}
            className="w-[120px] custom-xs:w-[104px]"
            alt="logo"
          />
        </Link>
        <div
          className="h-8 w-8 flex items-center justify-center border rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IoCloseOutline /> : <TbMenu />}
        </div>
      </div>
      <div className="flex items-center gap-[50px] custom-lg:gap-6 max-md:gap-4 custom-xs:!gap-2">
        {/* search form  */}
        <form
          className="relative w-[557px] max-md:w-auto custom-2xl:w-[460px] custom-xl:w-[440px] custom-lg:w-[390px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Search for more interest"
            className={`py-[10px] px-4 border border-primaryColor rounded-[8px] w-full bg-white text-sm text-[#555] focus:outline-none max-md:absolute max-md:right-0 max-md:w-[270px] max-md:duration-200 max-md:ease-in-out max-md:py-2 max-md:bg-white custom-xs:!w-[215px] ${
              isMobileSearch
                ? "max-md:opacity-100 max-md:bottom-[-44px] max-md:visible"
                : "max-md:opacity-0 max-md:bottom-[-50px] max-md:invisible"
            }`}
            {...register("search")}
            ref={searchInputRef}
          />
          <button
            type="submit"
            className="h-7 w-7 bg-primaryColor flex items-center justify-center rounded-full text-white text-[22px] absolute top-1/2 right-4 translate-y-[-50%] max-md:relative max-md:right-0 max-md:top-0 max-md:translate-y-0"
            onClick={() => setIsMobileSearch(!isMobileSearch)}
            ref={searchButtonRef}
          >
            <CiSearch />
          </button>
        </form>
        <div className="flex items-center gap-9 custom-lg:gap-6 max-md:gap-4 custom-xs:!gap-2">
          {/* notification  */}
          <div
            className="relative"
            onClick={handleNotificationDropdown}
            ref={notificationButtonRef}
          >
            <p className="text-[#BCBCBC] text-[30px] cursor-pointer">
              <IoNotifications />
              <span className="w-[12px] h-[12px] rounded-full bg-[#469A4C] absolute top-1 right-1 border-[2px] border-white"></span>
            </p>
            {/* notification dropdown  */}
            <div
              className={`z-[10] p-8 pr-[5px] w-[451px] custom-xl:w-[390px] custom-lg:w-[390px] max-md:w-[320px] custom-2xl:p-5 custom-2xl:pr-0 custom-xl:p-5 custom-xl:pr-2 custom-lg:pr-2 bg-white rounded-[20px] custom-xl:rounded-[8px] custom-lg:rounded-[8px] shadow-[0px_7px_20px_0px_rgba(0, 0, 0, 0.06)] absolute top-8 right-0 duration-200 ease-in-out custom-lg:p-5 max-md:p-4 max-md:pr-2 max-md:rounded-[8px] custom-xs:right-[-65px] ${
                isNotificationOpen === true
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              ref={notificationDropdownRef}
            >
              <h4 className="text-[20px] custom-2xl:text-[18px] custom-xl:text-[18px] custom-lg:text-[18px] text-themeBlack font-semibold mb-6 max-md:mb-4 max-md:text-[18px]">
                Notifications
              </h4>
              <div className="max-h-[600px] custom-lg:max-h-[400px] max-md:max-h-[320px] overflow-y-auto pr-[25px] custom-2xl:pr-[10px] custom-xl:pr-[10px] custom-lg:pr-[10px] max-md:pr-2">
                {notificationData.map((item) => (
                  <NotificationCard key={item?.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          {/* profile  */}
          <div className="relative">
            <div
              className="flex items-center gap-3 max-md:gap-1 custom-2xl:gap-2 custom-xl:gap-2 custom-lg:gap-2 cursor-pointer max-md:border max-md:py-1 max-md:px-[6px] max-md:rounded-[20px]"
              onClick={handleProfileDropdown}
              ref={profileButtonRef}
            >
              <img
                className="w-10 h-10 min-w-10 max-md:w-8 max-md:min-w-8 max-md:h-8"
                src={ProfileAvatar}
                alt="ProfileAvatar"
              />
              <div className="flex items-center gap-2 max-md:gap-0">
                <p className="text-[18px] custom-2xl:text-base custom-xl:text-base custom-lg:text-base font-medium text-themeBlack max-md:hidden">
                  Md Mosharaf
                </p>
                <p className="text-[18px] max-md:text-base">
                  <IoIosArrowDown />
                </p>
              </div>
            </div>
            {/* profile dropdown  */}
            <ul
              className={`profile-dropdown duration-200 ease-in-out ${
                isProfileOpen === true
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              ref={profileDropdownRef}
            >
              <li>
                <Link
                  to={"/profile"}
                  className="custom-2xl:!text-[15px] custom-xl:!text-[15px] custom-lg:!text-[15px]"
                  onClick={handleProfileMenuClick}
                >
                  Profile Settings
                </Link>
              </li>
              <li className="logout">
                <Link
                  to={"/"}
                  className="custom-2xl:!text-[15px] custom-xl:!text-[15px] custom-lg:!text-[15px]"
                  onClick={handleProfileMenuClick}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
