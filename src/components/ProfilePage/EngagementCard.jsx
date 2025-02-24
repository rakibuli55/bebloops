import { MdShowChart } from "react-icons/md";
const EngagementCard = ({ item }) => {
  return (
    <div className="p-4 rounded-[8px]" style={{
        backgroundColor:item?.bg
    }}>
      <p className="text-base font-medium mb-1 capitalize custom-lg:text-sm max-md:text-sm">{item?.title}</p>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[24px] custom-lg:text-[20px] font-semibold text-themeBlack max-md:text-[19px]">{item?.totalNum}</p>
        <div>
          <p className="text-sm flex items-center gap-1">
            <span>+</span>
            {item?.percent}
            <span>
              <MdShowChart />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngagementCard;
