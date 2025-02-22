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
    <TabsList className="profile-tabs-buttons block bg-white h-[calc(100vh-166px)] overflow-x-auto w-[30%] pt-[10px] pb-[30px] px-5 no-scrollbar">
      <TabsTrigger value="dashboard">
        <p className="text-[20px]">
          <RxDashboard />
        </p>
        Dashboard
      </TabsTrigger>
      <TabsTrigger value="profile">
        <p className="text-[20px]">
          <FiUser />
        </p>
        My Profile
      </TabsTrigger>
      <TabsTrigger value="donation-history">
        <p className="text-[20px]">
          <BiDonateBlood />
        </p>
        Donation History
      </TabsTrigger>
      <TabsTrigger value="language">
        <p className="text-[20px]">
          <IoLanguageSharp />
        </p>
        Language
      </TabsTrigger>
      <TabsTrigger value="settings">
        <p className="text-[20px]">
          <IoSettingsOutline />
        </p>
        Settings
      </TabsTrigger>
      <TabsTrigger value="terms-conditions">
        <p className="text-[20px]">
          <IoIosHelpCircleOutline />
        </p>
        Terms & Conditions
      </TabsTrigger>
      <TabsTrigger value="privacy-policy">
        <p className="text-[20px]">
          <MdOutlinePrivacyTip />
        </p>
        Privacy Policy
      </TabsTrigger>
    </TabsList>
  );
};

export default TabsSidebar;
