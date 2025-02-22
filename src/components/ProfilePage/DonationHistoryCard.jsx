import { FaCheckCircle } from "react-icons/fa";

const DonationHistoryCard = () => {
  return (
    <div className="flex items-start gap-2 py-4 px-5 bg-[#F6F6F6] rounded-[8px]">
      <p className="text-primaryColor text-[20px] mt-1">
        <FaCheckCircle />
      </p>
      <div className="flex items-start justify-between gap-5 w-full">
        <div>
          <h4 className="text-[20px] font-semibold text-themeBlack">
            Central Church - Design team
          </h4>
          <p className="mt-1 text-themeBlack">Donation for community</p>
        </div>
        <p className="font-semibold text-themeBlack">$10</p>
      </div>
    </div>
  );
};

export default DonationHistoryCard;
