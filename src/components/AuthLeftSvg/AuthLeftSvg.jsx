import React from "react";
import discusion from "../../assets/images/cuate.png";

const AuthLeftSvg = () => {
  return (
    <div className=" max-w-[400px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[700px] px-[10px] hidden xl:block max-h-[474.784px] cursor-default select-none">
      <img
        src={discusion}
        className="h-full w-full object-cover cursor-default block"
        alt="not found"
      />
    </div>
  );
};

export default AuthLeftSvg;
