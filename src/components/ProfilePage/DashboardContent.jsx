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
      <h3 className="text-[30px] font-semibold text-themeBlack mb-8">
        Dashboard
      </h3>
      {/* Engagement  */}
      <div>
        {/* title  */}
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-semibold text-themeBlack">
            Engagement
          </p>
          <div>
            <Select defaultValue="7days">
              <SelectTrigger className="w-[180px] focus:ring-0 focus:outline-none focus:ring-offset-0">
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
        <div className="grid grid-cols-4 gap-4 mt-[10px]">
          {engagmentdata.map((item) => (
            <div key={item?.id} className="mt-4">
              <EngagementCard item={item} />
            </div>
          ))}
        </div>
      </div>
      {/* Today post */}
      <div className="mt-8">
        {/* title  */}
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-semibold text-themeBlack">
            Today post
          </p>
          <div>
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px] focus:ring-0 focus:outline-none focus:ring-offset-0">
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
        <div className="grid grid-cols-4 gap-4 mt-[10px]">
          {postData.map((post) => (
            <div key={post.id} className="mt-5">
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
