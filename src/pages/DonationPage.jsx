import { useForm } from "react-hook-form";
import { FaStripeS } from "react-icons/fa";
import paypalLogo from "../assets/images/logo/paypal-logo.svg"


const DonationPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <section className="no-scrollbar py-[124px] px-[275px] bg-white rounded-[16px] max-h-[calc(100vh-165px)] overflow-y-auto font-medium mt-6 custom-2xl:mt-4 custom-2xl:p-20 custom-xl:p-[60px] custom-xl:mt-4 custom-lg:p-10 custom-lg:mt-2 max-md:p-6 custom-xs:!p-5 custom-xs:mt-2">
      <p className="text-sm text-themeBlack text-center">Donate to</p>
      <h1 className="text-[24px] font-semibold text-themeBlack text-center mt-3 custom-lg:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">Public Speaking Practice Workshop for All Level People from February</h1>
      
      <div className="flex items-center justify-center gap-3 mt-12 custom-xs:mt-5">
        <p className="text-[18px]">$</p>
        <input 
        type="number" 
        name="donationAmount" 
        {...register('donationAmount', {required:'Please enter a amount'})}
        className="focus:outline-none px-3 py-2 border border-[#dadada] w-[140px] rounded-[6px] text-sm"
        placeholder="Enter amount"
        />
      </div>

      <div className="mt-12 custom-xs:mt-10">
        <input type="checkbox" id="montlyDonation" name="montlyDonation" {...register('montlyDonation')} />
        <label htmlFor="montlyDonation" className="cursor-pointer text-sm text-themeBlack inline-block ml-2">Make This a monthly donation</label>
      </div>
      <div className="mt-6">
        <button className="p-[14px] rounded-[8px] border bg-primaryColor border-primaryColor text-white text-base font-medium w-full flex items-center justify-center gap-1 duration-200 ease-in-out hover:bg-transparent hover:text-primaryColor hover:border-primayColor custom-xs:py-[10px] custom-xs:text-sm">
            <p className="text-[18px]">
                <FaStripeS />
            </p>
            Donate with Stripe
        </button>
        <button className="p-[14px] rounded-[8px] border border-primaryColor bg-transparent text-themeBlack text-base font-medium w-full flex items-center justify-center gap-[6px] duration-200 ease-in-out hover:bg-[#1f264f] hover:text-white hover:border-primayColor mt-4 custom-xs:py-[10px] custom-xs:text-sm">
            <img src={paypalLogo} alt="" />
            Donate with Stripe
        </button>
      </div>
    </section>
  );
};

export default DonationPage;