import { useState } from "react";
import imageOne from "../../assets/images/join1.png";
import imageTwo from "../../assets/images/join2.png";
import imageThree from "../../assets/images/join3.png";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";

const JoinedMovementCard = ({ item, name }) => {
  const [isJoined, setIsjoined] = useState(false);

  const handleMovementJoin = () => {
    setIsjoined((prev) => !prev);
  };
  return (
    <Link to={'/movement/1'} className="flex items-center flex-wrap justify-between border p-[10px] rounded-[6px] border-[#F6F6F6] custom-sm:border custom-sm:border-[#ECEBEB] custom-sm:p-3 custom-xs:border custom-xs:border-[#ECEBEB] custom-xs:p-4">
      <div className="flex items-start gap-4 custom-2xl:gap-3 custom-xl:gap-3 custom-sm:flex-col">
        <img
          className="w-[70px] min-w-[70px] rounded-[6px] h-[70px] custom-2xl:w-[50px] custom-2xl:min-w-[50px] custom-2xl:h-[50px] custom-xl:w-[60px] custom-xl:min-w-[60px] custom-xl:h-[60px] custom-lg:w-[60px] custom-lg:min-w-[60px] custom-lg:h-[60px] max-md:w-[55px] max-md:min-w-[55px] max-md:h-[55px] object-cover"
          src={item?.img}
          alt=""
        />
        <div>
          <h3 className="text-base font-semibold text-themeBlack">
            {item?.title}
          </h3>
          <p className={`mt-1 text-sm text-[#4D4D4D] ${name === 'joined' ? 'w-full' : name === 'suggested' ? 'w-[380px]' : 'w-[220px]'} custom-2xl:w-full custom-xl:w-full custom-lg:w-full max-md:w-full`}>
            {item?.description}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <div className="flex items-center">
              <img
                className="w-5 h-5 rounded-full bg-cover"
                src={imageOne}
                alt=""
              />
              <img
                className="w-5 h-5 rounded-full bg-cover ml-[-7px]"
                src={imageTwo}
                alt=""
              />
              <img
                className="w-5 h-5 rounded-full bg-cover ml-[-7px]"
                src={imageThree}
                alt=""
              />
            </div>
            <p className="text-primaryColor text-[12px]">+20 Join</p>
          </div>
          <p className="text-sm mt-1 text-[#4D4D4D]">
            {item?.comments} Comments . {item?.shares} Shares{" "}
          </p>
        </div>
      </div>
      {name !== "joined" && (
        <div
          className={`${
            isJoined ? "opacity-40 pointer-events-none" : "opacity-100"
          } custom-2xl:w-full custom-2xl:text-center custom-2xl:mt-3 custom-xl:w-full custom-xl:text-center custom-xl:mt-3 custom-lg:w-full custom-lg:text-center custom-lg:mt-3 max-md:w-full max-md:text-center max-md:mt-3`}
          onClick={handleMovementJoin}
        >
          <PrimaryButton
            text={isJoined ? "Joined" : "Join"}
            className="px-4 py-2 rounded-[8px] custom-2xl:text-sm custom-xl:text-sm custom-lg:text-sm"
          />
        </div>
      )}
    </Link>
  );
};

export default JoinedMovementCard;
