import DonationHistoryCard from "./DonationHistoryCard";

const DonationHistoryContent = () => {
  return (
    <div>
      <div>
        <h3 className="text-[30px] font-semibold text-themeBlack custom-2xl:text-[24px] custom-xl:text-[22px] custom-lg:text-[23px] max-md:text-[22px] custom-xs:!text-[18px]">
          Donation Payment History
        </h3>
        <p className="mt-2 custom-lg:text-sm max-md:text-sm">The last 30 days transaction will be shown</p>
      </div>
      <div>
        <div className="mt-6">
          <p className="mb-4 custom-lg:text-sm custom-xs:text-sm">10-Jan-2025</p>
          <div>
            <div>
              <DonationHistoryCard />
            </div>
            <div className="mt-5 custom-xs:mt-4">
              <DonationHistoryCard />
            </div>
            <div className="mt-5 custom-xs:mt-4">
              <DonationHistoryCard />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-4 custom-lg:text-sm custom-xs:text-sm">05- Nov-2024</p>
          <div>
            <div>
              <DonationHistoryCard />
            </div>
            <div className="mt-5">
              <DonationHistoryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistoryContent;
