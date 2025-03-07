import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import JoinCard from "@/components/Cards/JoinCard";
import {
  AccordionCancel,
  AccordionCross,
  Dropdown,
  SearchIcon,
} from "@/components/Svg/Svg";
import * as Accordion from "@radix-ui/react-accordion"; // Correct import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthInterest = () => {
  const [selctedValue, setselctedValue] = useState([]);
  const [step, setstep] = useState(1);
  const options = [
    "Art & Culture",
    "Learn",
    "Sports",
    "Social Activities",
    "Health & Wellbeing",
    "Craft",
  ];

  const navigate = useNavigate();

  // State to manage the default open item
  const [openItem, setOpenItem] = useState("item-0");

  const handleSelection = value => {
    setselctedValue(prevState => {
      if (prevState.includes(value)) {
        return prevState.filter(item => item !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  console.log(selctedValue);

  return (
    <section className="pt-5    px-5 lg:px-10 xl:px-0 flex flex-col gap-y-5 xl:gap-y-10 items-center">
      {step === 1 ? (
        <div className="flex flex-col gap-y-3 xl:gap-y-6 items-center ">
          <h6 className="common-para-one">Step 1 of 2</h6>
          <div className="flex flex-col gap-y-2 lg:gap-y-4 items-center ">
            <h2 className="common-form-heading font-bold text-lg xl:text-2xl   ">
              Get started by picking a few interests
            </h2>
            <span className="common-para-one font-medium ">
              Pick your favorite interests to find groups and related to them
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-3 xl:gap-y-6 items-center ">
          <h6 className="common-para-one">Step 2 of 2</h6>
          <div className="flex flex-col gap-y-2 lg:gap-y-4 items-center ">
            <h2 className="common-form-heading font-bold text-lg xl:text-2xl">
              Find a movement to join now
            </h2>
            <span className="common-para-one font-medium w-[250px] text-center px-2 break-words lg:max-w-[388px] ">
              Join movement to start and get suggestion what you to join
            </span>
          </div>
        </div>
      )}
      {step === 1 ? (
        <div className="flex flex-col gap-y-8 h-[400px] w-full relative overflow-y-scroll py-4 pr-5 ">
          <div className="relative ">
            <input
              placeholder="Search for more interest"
              type="text"
              className="pl-[23.5px] pr-[60px] py-4 w-full outline-none rounded-[8px] border-[1px] border-solid border-primaryColor common-para-one "
            />
            <div className="absolute top-0 right-0 w-[28px] h-[28px] bg-primaryColor rounded-full transform translate-y-1/2 mr-[23.5px] flex items-center justify-center cursor-pointer  ">
              <SearchIcon />
            </div>
          </div>
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem} // Update state on accordion item change
            className="flex flex-col relative max-w-[600px]  gap-y-4"
          >
            {[0, 1, 2, 3].map((item, index) => (
              <Accordion.Item
                key={index}
                className=" w-full  min-h-[50px] rounded-[8px] border-[1px] border-solid border-[#DADADA]"
                value={`item-${index}`} // Set unique value for each item
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full flex-row justify-between items-center px-4 py-2">
                    <span className="common-form-heading text-base">
                      Art & Culture
                    </span>
                    <Dropdown />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-3 py-4 flex flex-row gap-[14px] flex-wrap">
                  {/* The content will only be shown when the accordion item is open */}
                  {options.map((Option, optionIndex) => {
                    const isSelected = selctedValue.includes(Option);
                    return (
                      <div
                        className={`${
                          isSelected
                            ? ` border-transparent bg-primaryColor`
                            : ` border-[#A1A1A1] bg-transparent `
                        } flex items-center py-1 cursor-pointer flex-row gap-x-[2px] px-2 rounded-[8px] border-[1px] border-solid`}
                        key={optionIndex}
                        onClick={() => {
                          handleSelection(Option);
                        }}
                      >
                        <span
                          className={`${
                            isSelected ? `text-white` : "text-defaultGray"
                          } text-base font-medium leading-[150%] `}
                        >
                          {Option}
                        </span>
                        <div className="w-[30px]">
                          {isSelected ? (
                            <AccordionCancel />
                          ) : (
                            <AccordionCross />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ) : (
        <div className="flex flex-row gap-6 2xl:mx-[100px] 2xl:w-[1420px]  h-[350px] overflow-y-scroll items-center justify-center flex-wrap ">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
            return <JoinCard key={index} />;
          })}
        </div>
      )}
      <div className="w-full relative flex items-center justify-center  ">
        <AuthButton
          onClick={e => {
            e.preventDefault();
            if (step === 1) {
              setstep(2);
            } else if (step === 2) {
              navigate("/");
              setstep(1);
            }
          }}
          CustomWidth={true}
          Text={"Next"}
        />
      </div>
    </section>
  );
};

export default AuthInterest;
