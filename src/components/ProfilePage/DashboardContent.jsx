import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashPostImg from "../../assets/images/dash-post.png";
import EngagementCard from "./EngagementCard";
import Post from "./Post";

const engagmentdata = [
  {
    id: 1,
    title: "total post",
    totalNum: "100",
    percent: "6.08%",
    bg: "#E6E6FF",
  },
  {
    id: 2,
    title: "Total Share",
    totalNum: "1.2M",
    percent: "6.08%",
    bg: "#DFE9F7",
  },
  {
    id: 3,
    title: "Comments",
    totalNum: "2000",
    percent: "6.08%",
    bg: "#D0FFE0",
  },
  {
    id: 4,
    title: "Views",
    totalNum: "5000",
    percent: "6.08%",
    bg: "#FFF8CC",
  },
];
const postData = [
  {
    id: 1,
    image: DashPostImg,
    title: "Gorem ipsum dolor",
  },
  {
    id: 2,
    image: DashPostImg,
    title: "Gorem ipsum dolor",
  },
  {
    id: 3,
    image: DashPostImg,
    title: "Gorem ipsum dolor",
  },
  {
    id: 4,
    image: DashPostImg,
    title: "Gorem ipsum dolor",
  },
];

const DashboardContent = () => {
  return (
    <div>
      <h3 className="text-[30px] font-semibold text-themeBlack mb-8 custom-2xl:text-[24px] custom-xl:text-[22px] custom-2xl:mb-7 custom-xl:mb-7 custom-lg:text-[23px] custom-lg:mb-6 max-md:text-[22px] max-md:mb-5 custom-xs:!text-[18px]">
        Dashboard
      </h3>
      {/* Engagement  */}
      <div>
        {/* title  */}
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-semibold text-themeBlack custom-lg:text-base max-md:text-base">
            Engagement
          </p>
          <div>
            <Select defaultValue="7days">
              <SelectTrigger className="w-[180px] custom-xs:w-[140px] custom-xs:!h-[36px] max-md:h-[40px] focus:ring-0 focus:outline-none focus:ring-offset-0">
                <SelectValue placeholder="Engagement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="dark">Last 1 month</SelectItem>
                <SelectItem value="system">Last 2 month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-[10px] custom-2xl:grid-cols-2 custom-2xl:gap-4 custom-2xl:mt-5 custom-xl:grid-cols-2 custom-xl:gap-4 custom-xl:mt-5 custom-lg:grid-cols-2 custom-lg:gap-4 custom-lg:mt-5 max-md:grid-cols-2 max-md:mt-6 max-md:gap-3 custom-xs:!grid-cols-1 custom-xs:!mt-5">
          {engagmentdata.map((item) => (
            <div key={item?.id} className="mt-4 custom-2xl:mt-0 custom-xl:mt-0 custom-lg:mt-0 max-md:mt-0">
              <EngagementCard item={item} />
            </div>
          ))}
        </div>
      </div>
      {/* Today post */}
      <div className="mt-8">
        {/* title  */}
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-semibold text-themeBlack custom-lg:text-base max-md:text-base">
            Today post
          </p>
          <div>
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px] custom-xs:w-[140px] custom-xs:!h-[36px] max-md:h-[40px] focus:ring-0 focus:outline-none focus:ring-offset-0">
                <SelectValue placeholder="Engagement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="last-month">Last 1 month</SelectItem>
                <SelectItem value="last-two-month">Last 2 month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-[10px] custom-2xl:grid-cols-2 custom-2xl:mt-[22px] custom-xl:grid-cols-2 custom-xl:mt-[22px] custom-lg:grid-cols-2 custom-lg:mt-[22px] max-md:grid-cols-2 max-md:mt-7 max-md:gap-3 custom-xs:!grid-cols-1 custom-xs:!mt-5">
          {postData.map((post) => (
            <div key={post.id} className="mt-5 custom-2xl:mt-0 custom-xl:mt-0 custom-lg:mt-0 max-md:mt-0">
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
