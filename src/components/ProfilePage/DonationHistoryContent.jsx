import DonationHistoryCard from "./DonationHistoryCard";

const DonationHistoryContent = () => {
  return (
    <div>
      <div>
        <h3 className="text-[30px] font-semibold text-themeBlack">
          Donation Payment History
        </h3>
        <p className="mt-2">The last 30 days transaction will be shown</p>
      </div>
      <div>
        <div className="mt-6">
          <p className="mb-4">10-Jan-2025</p>
          <div>
            <div>
              <DonationHistoryCard />
            </div>
            <div className="mt-5">
              <DonationHistoryCard />
            </div>
            <div className="mt-5">
              <DonationHistoryCard />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-4">05- Nov-2024</p>
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
