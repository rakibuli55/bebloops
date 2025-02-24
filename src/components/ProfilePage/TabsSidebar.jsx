import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiDonateBlood, BiLogOut } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoLanguageSharp, IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const TabsSidebar = () => {
  return (
    <TabsList className="profile-tabs-buttons block bg-white h-[calc(100vh-166px)] custom-2xl:h-[calc(100vh-127px)] custom-xl:h-[calc(100vh-127px)] max-md:h-full overflow-x-auto w-[30%] pt-[10px] pb-[30px] px-5 no-scrollbar custom-xl:p-4 custom-lg:p-4 max-md:flex max-md:w-full max-md:justify-start max-md:gap-4 max-md:p-4 custom-xs:!p-3 custom-xs:!gap-[10px]">
      <TabsTrigger value="dashboard">
        <p className="text-[20px] custom-lg:text-[17px]">
          <RxDashboard />
        </p>
        <span className="max-md:hidden">Dashboard</span>
      </TabsTrigger>
      <TabsTrigger value="profile">
        <p className="text-[20px] custom-lg:text-[17px]">
          <FiUser />
        </p>
        <span className="max-md:hidden">My Profile</span>
      </TabsTrigger>
      <TabsTrigger value="donation-history">
        <p className="text-[20px] custom-lg:text-[17px]">
          <BiDonateBlood />
        </p>
        <span className="max-md:hidden">Donation History</span>
      </TabsTrigger>
      <TabsTrigger value="language">
        <p className="text-[20px] custom-lg:text-[17px]">
          <IoLanguageSharp />
        </p>
        <span className="max-md:hidden">Language</span>
      </TabsTrigger>
      <TabsTrigger value="settings">
        <p className="text-[20px] custom-lg:text-[17px]">
          <IoSettingsOutline />
        </p>
        <span className="max-md:hidden">Settings</span>
      </TabsTrigger>
      <TabsTrigger value="terms-conditions">
        <p className="text-[20px] custom-lg:text-[17px]">
          <IoIosHelpCircleOutline />
        </p>
        <span className="max-md:hidden">Terms & Conditions</span>
      </TabsTrigger>
      <TabsTrigger value="privacy-policy">
        <p className="text-[20px] custom-lg:text-[17px]">
          <MdOutlinePrivacyTip />
        </p>
        <span className="max-md:hidden">Privacy Policy</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default TabsSidebar;
