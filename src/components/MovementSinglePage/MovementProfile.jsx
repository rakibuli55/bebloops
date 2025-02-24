import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const MovementProfile = ({ item }) => {
  return (
    <div className="flex items-center justify-between custom-2xl:gap-10 custom-md:gap-10 custom-sm:flex-col custom-xs:flex-col">
      <div className="w-[557px] custom-2xl:w-[450px] custom-sm:w-full custom-xs:w-full">
        {/* profile  */}
        <div className="flex items-center gap-[18px] custom-xl:gap-3 custom-md:gap-3 custom-sm:gap-3 custom-xs:gap-[10px]">
          <img
            className="w-[129px] h-[129px] custom-2xl:w-[100px] custom-2xl:h-[100px] custom-xl:w-[90px] custom-xl:h-[90px] custom-lg:w-[90px] custom-lg:h-[90px] custom-md:w-[80px] custom-md:h-[80px] custom-sm:w-[80px] custom-sm:h-[80px] custom-xs:w-[60px] custom-xs:h-[60px] object-cover rounded-full"
            src={item?.image}
            alt=""
          />
          <div>
            <h2 className="text-[20px] custom-md:text-[18px] custom-xs:text-[17px] font-semibold text-themeBlack">
              {item?.name}
            </h2>
            <p className="mt-[6px] custom-md:mt-1 custom-sm:mt-1 custom-xs:mt-1 text-sm text-[#a1a1a1]">{item?.author}</p>
          </div>
        </div>
        <p className="text-sm text-[#4d4d4d] font-medium mt-4">{item?.bio}</p>
        <p className="text-themeBlack text-sm mt-2">
          Pdf link: <span className="text-primaryColor hover:underline cursor-pointer">{item?.pdfLink}</span>
        </p>
        <button className="mt-3 py-2 px-4 border border-primaryColor rounded-[8px] flex items-center gap-2 hover:bg-primaryColor hover:text-white duration-200 ease-in-out">
          <p className="text-[20px]"><IoChatbubbleEllipsesOutline /></p>
          <span className="text-sm font-medium">Chat</span>
        </button>
      </div>
      <div className="w-[410px] h-[235px] custom-sm:w-full custom-xs:w-full custom-md:h-[200px] custom-xs:h-[200px] custom-sm:mt-5 custom-xs:mt-5">
        <video controls className="w-full h-full object-cover rounded-[8px] custom-xs:rounded-[6px]">
            <source src={item?.introVideo} />
        </video>
      </div>
    </div>
  );
};

export default MovementProfile;
