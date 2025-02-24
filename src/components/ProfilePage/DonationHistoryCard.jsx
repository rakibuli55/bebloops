import { FaCheckCircle } from "react-icons/fa";

const DonationHistoryCard = () => {
  return (
    <div className="flex items-start gap-2 py-4 px-5 bg-[#F6F6F6] rounded-[8px] custom-2xl:py-4 custom-xl:py-4 custom-xs:px-4 custom-xs:py-3">
      <p className="text-primaryColor text-[20px] mt-1">
        <FaCheckCircle />
      </p>
      <div className="flex items-start justify-between gap-5 w-full">
        <div>
          <h4 className="text-[20px] custom-2xl:text-[18px] custom-lg:text-[17px] max-md:text-[17px] font-semibold text-themeBlack custom-xs:!text-[15px]">
            Central Church - Design team
          </h4>
          <p className="mt-1 text-themeBlack custom-2xl:text-[15px] custom-xl:text-[15px] custom-lg:text-sm max-md:text-sm">Donation for community</p>
        </div>
        <p className="font-semibold text-themeBlack">$10</p>
      </div>
    </div>
  );
};

export default DonationHistoryCard;
